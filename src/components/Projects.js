// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import githubIcon from '../assets/github-icon.png';  // Update with your actual path

function Projects() {
    const projects = [
        { name: "NexPulse", description: "A social media platform focused on elderly user protection...", githubLink: "https://github.com/username/nexpulse" },
        { name: "Green Cart", description: "An e-commerce platform for eco-friendly products...", githubLink: "https://github.com/username/greencart" },
        { name: "Project 3", description: "Description for project 3...", githubLink: "https://github.com/username/project3" },
        { name: "Project 4", description: "Description for project 4...", githubLink: "https://github.com/username/project4" },
        { name: "Project 5", description: "Description for project 5...", githubLink: "https://github.com/username/project5" },
        { name: "Project 6", description: "Description for project 6...", githubLink: "https://github.com/username/project6" },
    ];

    const [visibleProjects, setVisibleProjects] = useState(3);

    const toggleProjectsVisibility = () => {
        setVisibleProjects(visibleProjects === 3 ? projects.length : 3);
    };

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-header">
                            <h2>{project.name}</h2>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <button className="toggle-button" onClick={toggleProjectsVisibility}>
                {visibleProjects === 3 ? "See More" : "See Less"}
            </button>
        </section>
    );
}

export default Projects;
