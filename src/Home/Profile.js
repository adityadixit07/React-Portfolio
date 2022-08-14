import React from "react";
import "./profile.css";
import { Typewriter } from "react-simple-typewriter";
import profilephoto from "../Materials/adityaimg.jpg";
function Profile() {
  return (
    <div>
      <div className="navbar">
        <span>Aditya Dixit</span>
        <nav>
          <li>
          
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="ContactForm">Contact</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
        </nav>
      </div>
      {/* my img+typical typing elemment will be in this place */}
      <div className="main">
        <div className="left">
          <h1>
            I'M a&nbsp;
            <span className="left-style">
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[
                  "Aditya Dixit",
                  "Passionate Web Developer",
                  "Freelancer",
                  "Content-Creator",
                  "Student.",
                ]}
              />
            </span>
          </h1>
        </div>
        <div className="right">
          {/* <span>here is profile phote displayed</span> */}
          <img src={profilephoto} alt="" />
        </div>
      </div>

      {/* home content */}
      <div className="name">
        <p className="title">My Work</p>
      </div>
      <div className="content">
        <div className="project1">
          <a href="https://github.com/adityadixit07/Text-Analyzer">
            Text Analyzer
          </a>
          {/* <li><a href="github.com"></a></li> */}
          <p>
            This text analyzer convert the uppercase letter into lowercase and
            count the type words.It is also count the no of characters.
          </p>
        </div>
        <div className="project1">
          <a href="https://github.com/adityadixit07/Resume-Generator">
            Resume Generator
          </a>

          {/* <img src={profile} alt="" /> */}
          <p>
            In this project, I use the javascript local storage . Apart from
            that I also use html ans css.
          </p>
        </div>
        <div className="project1">
          <a href="https://github.com/adityadixit07/Calculator">
            Calculator-js
          </a>
          <img src="" alt="" />
          <p>
            In making calculator, I use the javascript calculator method.You can
            calculate all numeric value no mathematical function are not
            availble in this calculator like square-root and exponential
            function.
          </p>
        </div>
        <div className="project1">
          <a href="https://github.com/adityadixit07/Food-website">
            Food Website
          </a>
          <img src="" alt="" />
          <p>
            In this website i used the core part of css like flex and grid.
            Javascript slider and different background properties are also
            used.Media query is also used in this website to make it responsive.
          </p>
        </div>
      </div>

      {/* testimonials */}
      <div className="testmonials"></div>
      {/* foooter */}
    </div>
  );
}

export default Profile;
