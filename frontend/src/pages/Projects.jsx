import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";


const projectData = [
  {
    title: "E-Commerce Website",
    desc: "Developed a full-stack E-commerce web application using the MERN stack (MongoDB, Express.js, React, Node.js). The platform allows users to browse products, view details, and add items to the cart with a smooth and responsive user interface.Implemented core functionalities such as product listing, cart management, and dynamic UI updates to enhance user experience. Designed and integrated RESTful APIs to handle product data and user interactions efficiently.Focused on building a clean UI/UX and ensuring responsive design across devices. ",
    tech: ["React", "Node.js", "MongoDB","CSS","Express.js"],
    github: "https://github.com/Rangaswamy129/ecommerce-project",
    demo: "https://e-commerce-platform-blue.vercel.app/",
  },
  {
    title: "HealthCare Platform",
    desc: "Developed a full-stack Healthcare Platform using the MERN stack (MongoDB, Express.js, React, Node.js) to provide users with accessible and efficient healthcare services. The application allows users to manage patient information, explore healthcare resources, and interact with the system through a clean and responsive interface.Implemented features such as user authentication, data management, and a video consultation module for real-time interaction between patients and doctors. Integrated frontend and backend using RESTful APIs to ensure smooth data flow and performance.",
    tech: ["React", "Node.js", "MongoDB","CSS","Express.js"],
    github: "https://github.com/Rangaswamy129/Healthcarewebsite.git",
    demo: "https://healthcare-platform-smos.vercel.app/",
  },
  
];

const Projects = () => {

  useScrollReveal();

  return (
    <div className="projects-container">

      {/* HEADER */}
      <section className="projects-hero reveal">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I’ve built using modern web technologies.
        </p>
      </section>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`project-card reveal delay-${index % 3}`}
          >
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            {/* TECH STACK */}
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {/* LINKS */}
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={16} /> Live
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;