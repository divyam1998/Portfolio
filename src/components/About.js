import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p className="subheading">
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
            </p>

            <div className="about-content">
                <div className="about-text">
                    <h3>Get to know me!</h3>
                    <p>
                        I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the <a href="#projects">Projects</a> section.
                    </p>
                    <p>
                        I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to connect or follow me on my <a href="https://www.linkedin.com">LinkedIn</a> and <a href="https://www.instagram.com">Instagram</a> where I post useful content related to Web Development and Programming.
                    </p>
                    <p>
                        I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to <a href="#contact">contact</a> me.
                    </p>
                    <a href="#contact" className="cta-button">Contact</a>
                </div>

                <div className="about-skills">
                    <h3>My Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>WordPress</li>
                        <li>PHP</li>
                        <li>SASS</li>
                        <li>GIT</li>
                        <li>GitHub</li>
                        <li>Responsive Design</li>
                        <li>SEO</li>
                        <li>Terminal</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
