import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-container">
                <a href="mailto:jaindivyam89@gmail.com" className="contact-icon">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/divyam-jain" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FaGithub />
                </a>
                <a href="/path-to-your-resume.pdf" download className="contact-icon">
                    <FaDownload />
                </a>
            </div>
        </section>
    );
}

export default Contact;
