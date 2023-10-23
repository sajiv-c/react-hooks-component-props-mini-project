import react from "react";
import reactDom from "react-dom";

function About({image="https://via.placeholder.com/215", about}) {
    return (
      <aside>
        <img src={image} alt="blog logo"/>
        <p>
          {about}
        </p>
      </aside>
    )
}

export default About;