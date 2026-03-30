import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {


  useScrollReveal();
  return (
    <div className="about-container">

      {/* HEADER */}
      <section className="about-hero reveal">
        <h1>About Me</h1>
        <p>
          I'm <b>Rangaswamy S G</b>,a passionate Computer Science student with a strong interest in building scalable and user-friendly web applications. I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js) along with a solid foundation in Java.I am a quick learner, problem solver, and highly motivated to continuously improve my technical skills. I am currently seeking entry-level opportunities where I can contribute, learn, and grow as a Software Developer or Web Developer.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="about-section reveal delay-1">
        <h2>Education</h2>

        <div className="card">
          <h3>Bachelor of Engineering (B.E)</h3>
          <p>Computer Science Engineering</p>
          <p>Maharaja Institute of Technology Mysore</p>
          <span>2022 - 2026</span>
        </div>
         <div className="card">
          <h3>PUC</h3>
          <p>Computer Science Engineering</p>
          <p>Govt PU College, Hommaragalli H D kote,Mysore</p>
          <span>2020 - 2022</span>
        </div>
        <div className="card">
          <h3>SSLC</h3>
          <p>Computer Science Engineering</p>
          <p>Govt High School, Hommaragalli H D kote,Mysore</p>
          <span>2019 - 2020</span>
        </div>
        
      </section>

      {/* SKILLS */}
      <section className="about-section reveal delay-2">
        <h2> Skills</h2>

        <div className="skills-grid">
          <span>React JS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Java</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="about-section reveal delay-3">
        <h2> Projects</h2>

        <div className="card">
          <h3>E-Commerce Website</h3>
          <p>
           Developed a full-stack E-commerce web application using the MERN stack (MongoDB, Express.js, React, Node.js). The platform allows users to browse products, view details, and add items to the cart with a smooth and responsive user interface.
Implemented core functionalities such as product listing, cart management, and dynamic UI updates to enhance user experience. Designed and integrated RESTful APIs to handle product data and user interactions efficiently.
Focused on building a clean UI/UX and ensuring responsive design across devices. This project helped me strengthen my skills in frontend and backend development and understand real-world application flow.
          </p>
        </div>

        <div className="card">
          <h3>Healthcare Platform</h3>
          <p>
            Developed a full-stack Healthcare Platform using the MERN stack (MongoDB, Express.js, React, Node.js) to provide users with accessible and efficient healthcare services. The application allows users to manage patient information, explore healthcare resources, and interact with the system through a clean and responsive interface.
Implemented features such as user authentication, data management, and a video consultation module for real-time interaction between patients and doctors. Integrated frontend and backend using RESTful APIs to ensure smooth data flow and performance.
This project helped me gain hands-on experience in building real-world applications, improving UI/UX design, and working with both frontend and backend technologies.
          </p>
        </div>
      </section>
      <section className="about-section reveal delay-2">
         <div className="card">
  <h2>Why Hire Me?</h2>
  <p>
    I am a passionate MERN stack and web developer with a solid foundation in building responsive, scalable, and user-friendly applications. I have hands-on experience working with MongoDB, Express.js, React.js, and Node.js, and I enjoy turning ideas into real-world projects.

I have developed multiple projects that demonstrate my ability to design clean UI, write efficient backend logic, and integrate APIs effectively. I focus on writing clean, maintainable code and continuously improving my skills by learning new technologies and best practices.

I am a quick learner, adaptable, and a strong problem-solver. I am eager to contribute to a team, take on challenges, and grow within a professional IT environment. Hiring me means gaining a dedicated developer who is motivated to deliver quality work and add value to your organization.
  </p>
  </div>
</section>

    </div>
  );
};

export default About;