import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Typing from '../components/Typing';
import profile from "../assets/profile.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero container">

        {/* Background Effects */}
        <div className="blob"></div>
        <div className="blob blob2"></div>

        {/* LEFT SIDE */}
        <div className="hero-text">

          <p className="availability">
            Available for new opportunities
          </p>

          <h1 className="fade-up">
            <Typing />
          </h1>

          <p className="fade-up">
            I’m <b>Rangaswamy S G</b>. I build high-performance, scalable and visually stunning web applications.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View Projects →
            </Link>

            <a href="/resume.pdf" download className="btn outline">
              Download Resume
            </a>
          </div>

          {/* SOCIAL */}
          <div className="social-icons">
            <a href="https://github.com/Rangaswamy129" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
              <FaLinkedin size={22} />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Ranga" />
        </div>

      </section>

      {/* ABOUT */}
      <section className="section reveal">
        <h2>About Me</h2>
         <div className="education-box">
        <p>
        I am a passionate and dedicated MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I have hands-on experience working with technologies like MongoDB, Express.js, React.js, and Node.js, along with strong fundamentals in HTML, CSS, and JavaScript.

I enjoy turning ideas into real-world projects and continuously strive to improve my skills by learning new tools and frameworks. I have worked on multiple projects that demonstrate my ability to design intuitive user interfaces, manage backend services, and integrate APIs effectively.

I am a quick learner, problem solver, and a team player who is always eager to take on new challenges and grow in the field of web development. My goal is to contribute to innovative projects and build scalable solutions that create real impact.
        </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section reveal delay-1">
        <h2>Skills</h2>
        <ul className="skills">
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>MERN Stack</li>
        </ul>
      </section>

      {/* WHY HIRE ME */}
      <section className="section reveal delay-2">
        <h2>Why Hire Me?</h2>
        <div className="education-box">
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

export default Home;