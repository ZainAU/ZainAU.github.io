import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import bgimg from "../assets/img/img4.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "We are students at Habib University.", "This is our Khidmat website."];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline" style={{color:"black"}}>Resources for Digital Literacy</span>
                <h2 style={{color:"black", fontSize:"35px"}}>{`Hello!`} <span className="txt-rotate" dataperiod="10" data-rotate='[ "We are from Habib University", "This is our Khidmat website"]'><span className="wrap" style={{ color: 'black' }}>{text}</span></span></h2>
                  <p   style={{color:"black", fontSize:"15px", fontWeight:700 }}>Our Khidmat project, "Digital Literacy for Teens," aimed to empower students with foundational computer skills and ignite their passion for technology.  We divided the curriculum into four key areas.  Basic Computer Operation focused on essential navigation and file management skills. Software Applications delved into document creation and formatting with MS Word, basic image manipulation with Paint, and creative design projects using Canva.  Safe Internet Practices emphasized responsible online behavior and information evaluation.</p>
                  {/* <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img  src={bgimg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
