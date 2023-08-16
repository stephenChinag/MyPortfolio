import React, { useEffect } from "react";
import "./Projects.css";
import peerScore from "../assets/PeerScore.jpg";
import RrealityProx from "../assets/RealtyProx.jpg";
import TaskProx from "../assets/taskprox.jpg";
import Wstc from "../assets/wstc.jpg";
import Clubly from "../assets/clubly.jpg";
import Food from "../assets/Food with React.jpg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../store/ProjectsSlice";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    project_name: " WSTC ADMIN",
    image_url: Wstc,
    description:
      " WSTC Financial Services Limited is an integrated financial services group  providing superior financial services to clients. ",

    tech_stack: [
      "JavaScript",
      "CSS",
      "SCSS",
      "Reactjs",
      "JQuery",
      "React Bootstrap",
      "C#",
      ".NET",
    ],
  },
  {
    project_name: "RealtyProx",
    image_url: RrealityProx,
    description:
      "RealtyProx is a digital real estate platform designed to ease the process of leasing, buying and selling properties. It is an all-in-one platform for tenants, landlords, agents and agencies to carry out their real estate businesses at the comfort of their homes, doing away with all the stress, insecurity and hustle associated with securing and/or managing properties.",

    tech_stack: [
      "JavaScript",
      "CSS",
      "SCSS",
      "Reactjs",
      "JQuery",
      "React Bootstrap",
      "Python",
    ],
  },
  {
    project_name: "Food on Rails",
    image_url: TaskProx,
    description:
      "TaskProx is a digital artisanship platform where people who are looking to outsource a task such as cleaning, carpentry, painting etc. can connect with trusted and skilled artisans or handymen to deliver on such tasks. Both parties simply connect, set the terms for the task, agree on a price and voila! the task is carried out and payments are disbursed.",

    tech_stack: [
      "JavaScript",
      "CSS",
      "SCSS",
      "Reactjs",
      "JQuery",
      "React Bootstrap",
    ],
  },

  {
    project_name: "Cubly",
    image_url: Clubly,
    description:
      "Clubly is a secure and free web platform designed to make association and club management easy. It is a digital platform that allows club/association admins or executives to onboard their new or existing association and members, manage finances of the association, communicate and exchange ideas through the forum, set up events and even conduct elections for various roles in the association. It is an all-in-one solution for you and your association.",
    source_link: "https://github.com/PrantoshB/Food-On-Rails",
    live_link: "https://food-on-rail.onrender.com/",
    tech_stack: [
      "JavaScript",
      "CSS",
      "SCSS",
      "Python",
      "Reactjs",
      "JQuery",
      "React Bootstrap",
    ],
  },

  {
    project_name: "PeerScore ",
    image_url: peerScore,
    description:
      "PeerScore is a peer-to-peer lending and credit information platform that seeks to shape credit behavior within the informal sector. It is a platform that allows you leverage the power of social networks and peer pressure to help you get your money back from defaulters. It is the new and secure way to lend money and manage repayments easily.",

    tech_stack: [
      "React",
      "Javascript",
      "MySql",
      "SCSS",
      "JQuery",
      "React Bootstrap",
      "Python",
    ],
  },
  {
    project_name: "Food on React",
    image_url: Food,
    description: "Food-On-React is an ecomerce website for food puchase ",

    tech_stack: [
      "JavaScript",
      "CSS",
      "SCSS",
      "Reactjs",
      "JQuery",
      "React Bootstrap",
    ],
  },
];
const Projects = () => {
  
  // const dispatch = useDispatch();
  // const projects = useSelector((state) => state.projects.projects);

  // useEffect(() => {
  //   dispatch(fetchProjects());
  // }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        Collaborated in 10+ projectsaround the world. Looking for next
        project/role.
      </p>

      <div className="projects-container">
        {allProjects.map((project, id) => (
          <ProjectCard
            id={id}
            source_link={project.source_link}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
          />
        ))}
      </div>

      {/* <div className="projects-container">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
