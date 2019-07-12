import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="About-Me">
      <div className="About-Me-Container">
        <img src="/assets/me.jpg" alt="Me" />
        <div className="About-Me-Description">
          <h1> ABOUT ME</h1>
          <p>
            Hello! I'm Ambrose Kuo, a 3rd year Computer Science student at
            Ryerson University. These are some projects I'm working on!{" "}
          </p>
          <a href="https://github.com/ambrosekuo"> Github</a>
          <a href="https://github.com/ambrosekuo"> Linkedln</a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
