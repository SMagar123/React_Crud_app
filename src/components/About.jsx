import React, { useContext } from "react";
import { AboutImage } from "../App";
import "../styles/about.css";
const About = () => {
  const aboutImage = useContext(AboutImage);
  return (
    <div className="aboutPage">
      <div className="aboutHeading">
        <h1>About Page</h1>
      </div>
      <div className="aboutBody">
        <div className="aboutBodyImage">
          <img src={aboutImage} alt="about_image" height="400vh" />
        </div>
        <div className="aboutBodyDescription">
          <p>
            CRUD operations are essential for any database or software
            application, and they form the foundation for more complex
            operations such as data aggregation and analysis. Most modern
            software applications provide simple and intuitive user interfaces
            for CRUD operations, allowing users to interact with data easily and
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
