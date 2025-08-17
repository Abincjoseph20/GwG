import React from "react";
import "./About.css";
import gold from "../../assets/Homes/gold.png";


function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Image Left */}
        <div className="about-image">
          <img
            src={gold} // replace with your image
            alt="About us"
          />
        </div>

        {/* Text Right */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to our platform! We are passionate about helping students
            and developers learn modern technologies in a fun and interactive
            way. Our mission is to make coding simple, accessible, and effective
            for everyone.
          </p>
          <p>
            Whether you are just starting out or already experienced, we provide
            tools, tutorials, and resources to take your skills to the next
            level.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
