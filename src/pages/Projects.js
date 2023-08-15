import React, { useEffect } from "react";
import "./Projects.css";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux";
// import { fetchProjects } from "../store/ProjectsSlice";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    id: "1",
    project_name: "HandyMate",
    image_url:
      "https://prantoshb.github.io/Portfolio-Backend/assets/handymate.png",
    description:
      "A Full-Stack web application, where users can reserve home services like Electrician, Plumber, Gardening etc. User can also delete the reservation. The Admin can add new services and delete existing services.",
    source_link: "https://github.com/PrantoshB/HandyMate-Frontend",
    live_link: "https://deploy--fabulous-horse-dfd6cb.netlify.app/",
    tech_stack: [
      "React",
      "Ruby on Rails",
      "PostgreSQL",
      "JWT",
      "BootStrap",
      "CSS",
    ],
  },

  {
    id: "2",
    project_name: "Food on Rails",
    image_url: "https://prantoshb.github.io/Portfolio-Backend/assets/for.png",
    description:
      "Food-On-Rails is a website for managing food inventory and creating/publishing recipes. Ideal for food enthusiasts seeking organization and recipe inspiration. It has a user authentication system with special privileges.",
    source_link: "https://github.com/PrantoshB/Food-On-Rails",
    live_link: "https://food-on-rail.onrender.com/",
    tech_stack: ["Ruby on Rails", "CSS", "PostgreSQL", "Devise", "CanCanCan"],
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
            key={project.id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stack={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>

      {/* <div className="projects-container">
        {projects.map((project, id) => (
          <ProjectCard
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
