import React, { useState, useEffect } from 'react';
import './Header.css';
import profileImage from '../assets/profile.jpg'
function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('dark-mode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <header>
            <div className="logo">
                <img src={profileImage} alt="Divyam Jain" />
                <h1>Divyam Jain</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
        </header>
    );
}

export default Header;
