import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Our Khidmat Composition</h2>
              <p>The curriculum for our Khidmat project, "Digital Literacy for Teens," emphasized creative expression and design skills. We dedicated a significant portion to Canva, allowing students to explore creating posters and presentations.  Basic functionalities of MS Word and Paint were also covered, equipping them with document creation and image manipulation tools.  Safe internet practices formed a crucial component, ensuring they could navigate the online world responsibly. While the focus wasn't solely on advanced skills, we did observe a positive impact on student confidence and initiative, reflected in their eagerness to experiment and explore technology further</p>
              <PieChart
                data={[
                  { title: 'MS Word', value: 20, color: '#E38627' },
                  { title: 'MS Paint', value: 20, color: '#C13C37' },
                  { title: 'Canva', value: 40, color: '#6A2135' },
                  {title:'Internet Safety', value: 5, color: 'purple' }
                ]}
                radius={40} // Adjust the radius to make the chart smaller
                label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`} // Add label for each part
                labelStyle={{ fontSize: '3.5px', fill: '#fff', fontFamily: 'Outlaw' }} // Adjust label style
                style={{ height: '350px', width: '350px' }} // Adjust the size of the chart container
              />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
