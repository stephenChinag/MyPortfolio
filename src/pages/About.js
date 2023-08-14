import React from "react";
import "./About.css";
import ReduxIcon from "../assets/redux.png";
import HTML from "../assets/html.png";
import jQuery from "../assets/jquery.png";
import Asp from "../assets/asp.png";
import JEST from "../assets/jest.png";
import Node from "../assets/nodejs.png";
import VSCode from "../assets/vscode.png";
import Figma from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import RSpecLogo from "../assets/bitbucket.png";
import NPMlogo from "../assets/npm.png";
import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";
import SkypeLogo from "../assets/skype.png";
import Slack from "../assets/slack.png";
import WebPack from "../assets/webpack.png";
import PostGres from "../assets/postgres.png";
import NoSql from "../assets/nosql.png";
// import Rails from "../assets/rails.png";
import LightRoom from "../assets/lightroom.png";
import SQL from "../assets/sql.png";
import Canva from "../assets/canva.png";
import PhotoShop from "../assets/photoshop.png";
import CDT from "../assets/cdt.png";
import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import NextJS from "../assets/next.webp";
import JavaScript from "../assets/javascript.png";
import Sass from "../assets/sass.png";
import PostMan from "../assets/postman.png";

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        A full stack developer with a passion for photography who combines both
        technical skills and creative eye to create innovative solutions and
        capture captivating visuals. By combining the technical skills in
        front-end and back-end development, database management, and server
        configuration, that can create dynamic websites and applications that
        are visually appealing and user-friendly.
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/14EJ-T2h_L5Zo8vJxd6IRoNnsltZL_H8d/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={ReduxIcon} alt="" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img src={jQuery} alt="" />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <img src={Sass} alt="" />
          <p>SASS</p>
        </div>
        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img src={NextJS} alt="" />
          <p>Next.js</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End and DataBase</h2>
      <div className="skills">
        <div className="skill">
          <img src={Asp} alt="" />
          <p>ASP.NET</p>
        </div>
        <div className="skill">
          <img src={Node} alt="" />
          <p>Node Js</p>
        </div>
        <div className="skill">
          <img src={SQL} alt="" />
          <p>SQL</p>
        </div>
        <div className="skill">
          <img src={PostGres} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill">
          <img src={NoSql} alt="" />
          <p>NoSQL</p>
        </div>
      </div>

      {/* /* <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React Native</p>
        </div>
        <div className="skill">
          <img src={Flutter} alt="" />
          <p>Flutter</p>
        </div>
</div> */}
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={RSpecLogo} alt="" />
          <p>Bitbucket</p>
        </div>
        <div className="skill">
          <img src={JEST} alt="" />
          <p>JEST</p>
        </div>
        <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={WebPack} alt="" />
          <p>Webpack</p>
        </div>
        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
      </div>
      <h2 className="skill-title">Art and Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="skill">
          <img src={LightRoom} alt="" />
          <p>LightRoom</p>
        </div>
        <div className="skill">
          <img src={PhotoShop} alt="" />
          <p>PhotoShop</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Slack} alt="" />
          <p>Slack</p>
        </div>
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Photoraphy</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Art</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>
  </section>
);

export default About;
