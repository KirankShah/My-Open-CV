import { useEffect } from 'react'
import Hero from './components/Hero'
import FeaturedDemo from './components/FeaturedDemo'
import About from './components/About'
import Differentiators from './components/Differentiators'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Videos from './components/Videos'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Google Analytics initialization (add your GA4 tracking ID)
  useEffect(() => {
    // Add Google Analytics script here once you have your tracking ID
    // window.gtag('config', 'YOUR-GA4-TRACKING-ID');
  }, []);

  // Smooth scroll to sections
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured AI Demo Section - Your Key Differentiator */}
      <FeaturedDemo />
      
      {/* About / Executive Profile */}
      <About />
      
      {/* Key Differentiators */}
      <Differentiators />
      
      {/* Projects & Technical Demos */}
      <Projects />
      
      {/* Professional Experience */}
      <Experience />
      
      {/* Publications & Articles */}
      <Publications />
      
      {/* Video Portfolio */}
      <Videos />
      
      {/* Certifications & Education */}
      <Certifications />
      
      {/* Skills & Expertise */}
      <Skills />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
