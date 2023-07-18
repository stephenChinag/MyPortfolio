import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE <br />
        COFFEE
        <br /> CHAT ☕️
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p> Photography </p>
        <p>.NET</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Space</p>
        <p>Pizza</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span>
          <a href="mailto:stephenchinag@gmail.com">cOnTaCt mE</a>
        </span>
      </h3>

      <hr />

      <div className="social">
        <span>
          <a
            href="https://github.com/stephenChinag"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </span>
        <span>
          {" "}
          <a
            href="https://www.linkedin.com/in/stephen-owoamanam-32053922a/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </span>
        <span>
          {" "}
          <a
            href="https://www.instagram.com/black_conceptu_s/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            My Art
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/Stephenchinagor"
            target="_blank"
            rel="noreferrer"
          >
            TWITTER
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Contact;
