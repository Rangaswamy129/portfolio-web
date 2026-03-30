import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState("");

  // ENV VARIABLES
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const contactInfo = [
    { icon: <Mail />, label: "Email", value: "rangaranga44440@gmail.com" },
    { icon: <Phone />, label: "Phone", value: "+91 7338624487" },
    { icon: <MapPin />, label: "Location", value: "Bengaluru, India" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
    .then(() => {
      setStatus(" Message sent successfully!");
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to send message. Try again.");
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="contact-container"
    >

      <div className="contact-header">
        <h2>
          Let's <span className="gradient-text">Connect.</span>
        </h2>
        <p>
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>
      </div>

      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-info">
          {contactInfo.map((info) => (
            <div key={info.label} className="info-card">
              <div className="icon">{info.icon}</div>
              <div>
                <p className="label">{info.label}</p>
                <p>{info.value}</p>
              </div>
            </div>
          ))}

          {/* SOCIAL */}
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={handleSubmit} className="contact-form">

          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required
          />

          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            required
          />

          <textarea 
            name="message"
            rows="5" 
            placeholder="Message" 
            required
          ></textarea>

          <button type="submit">
            Send Message <Send size={16} />
          </button>

          {status && <p className="status">{status}</p>}

        </form>
      </div>
    </motion.div>
  );
};

export default Contact;