import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MS Word",
      description: " Where words become art.",
      imgUrl: img1,
    },
    {
      title: "MS Paint",
      description: "Fueling creativity, one pixel at a time.",
      imgUrl: img2,
    },
    {
      title: "Canva",
      description: "Imagination put to good use.",
      imgUrl: img3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project Work</h2>
                <p>Building on our experience teaching the "Digital Literacy for Teens" program at NJV, we've taken the initiative to make these valuable resources even more accessible. We've compiled a comprehensive set of materials, including lesson plans, tutorials, and student guides, all readily available online. This ensures that the knowledge and skills we imparted to the NJV students can now benefit a wider audience. Anyone interested in learning Paint, MS Word and Canva can access these resources at their own pace and convenience. This initiative not only expands the reach of our Khidmat project but also empowers individuals to take charge of their digital literacy journey.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}