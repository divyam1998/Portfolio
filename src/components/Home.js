import React from 'react';
import Header from './Header';  // Import the Header component
import './Home.css';  // Import the Home-specific CSS

function Home() {
    return (
        <>
            <section id="hero">
                <div className="hero-content">
                    <h2>HEY, I'M YOUR NAME</h2>
                    <p>A Passionate Developer Creating Impactful Web Applications</p>
                    <a href="#projects" className="cta-button">PROJECTS</a>
                </div>
            </section>

            {/* <div className="social-sidebar">
                <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
                <a href="#"><img src="youtube-icon.png" alt="YouTube" /></a>
                <a href="#"><img src="github-icon.png" alt="GitHub" /></a>
                <a href="#"><img src="book-icon.png" alt="Blog" /></a>
            </div> */}
        </>
    );
}

export default Home;
