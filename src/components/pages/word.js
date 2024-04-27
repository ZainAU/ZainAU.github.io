import React from 'react';
import '../pages/word.css'; // Import your CSS file for styling

const word = () => {
  return (
    <div className="word-container">
      <img src="project-img1.png" alt="word Image" className="word-image" />
      <div className="word-text">
        <h1>Title of Your Blog Post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nibh turpis. Nulla facilisi. Donec ac orci
          aliquet, fermentum ipsum nec, ultrices nisl. In hac habitasse platea dictumst. Integer nec justo ac nisl
          vehicula venenatis a a tellus. Nulla facilisi. Mauris volutpat urna et sapien vehicula, et varius quam
          consequat. In vestibulum tristique libero, sed ultricies dolor viverra at. Mauris efficitur ante id ipsum
          interdum, a fringilla libero dictum. Duis semper vestibulum sodales. Nunc egestas dolor ut dui cursus, id
          suscipit justo fringilla. Curabitur efficitur nisi at ligula tincidunt, in vulputate tortor efficitur.
        </p>
        <p>
          Nulla facilisi. Duis nec lorem sollicitudin, fermentum ipsum a, lacinia arcu. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Ut vel nisi nec ex vehicula varius. Proin
          ultrices tristique leo ac viverra. Aenean aliquam purus nec aliquam mattis. Integer convallis nisl vel
          laoreet ultricies. Cras id ante non ante malesuada tempus eget a orci. Ut sit amet fringilla purus, id
          fermentum nisi. Integer scelerisque velit vel nunc laoreet, eget tempor nulla elementum.
        </p>
        <p>
          Quisque pretium, ex et gravida feugiat, arcu ligula condimentum enim, ut volutpat leo tortor vitae elit.
          Donec rutrum, quam nec placerat lobortis, odio risus semper nibh, et varius ex nisi ut risus. Nullam
          venenatis risus quis quam tincidunt, sit amet fringilla nisi condimentum. Sed malesuada purus id nibh
          malesuada, non placerat leo scelerisque. Cras congue nunc eu ante ultricies, a ullamcorper odio gravida.
        </p>
      </div>
    </div>
  );
};

export default word;
