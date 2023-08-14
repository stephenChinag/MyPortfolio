import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Imu from "../assets/imu.png";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM STEPHEN</h2>
        <h3 className="tagline">
          Breaking keyboards, Click shutter button and pushing pixels since 2018
        </h3>
        <p className="paragraph">
          I'm passionate about crafting exceptional digital experiences. I bring
          ideas to life in the virtual realm with a keyboard as my paintbrush
          and lines of code as my canvas. Let's join forces and bring your
          digital dreams to fruition. Get in touch, and let's embark on this
          exciting journey together!
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/14EJ-T2h_L5Zo8vJxd6IRoNnsltZL_H8d/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="Dante" className="hero-image" />
    </div>
    <div className="social-icons">
      <a
        href="https://github.com/StephenChinag"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/stephen-owoamanam-32053922a/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a
        href="https://wellfound.com/u/prantosh-biswas"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-angellist" />
      </a>
      <a
        href="https://www.twitter.com/prantalks"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
    </div>
  </div>
);

export default Hero;
