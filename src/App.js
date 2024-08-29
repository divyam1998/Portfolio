// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

function App() {

    useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for animations
          once: true, // Whether animation should happen only once while scrolling down
      });
    }, []);

    
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
