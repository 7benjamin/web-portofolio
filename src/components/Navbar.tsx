
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle hash navigation when component mounts or location changes
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Get the element with the ID that matches the hash (without the #)
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      
      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page has fully loaded
      }
    }
  }, [location]);

  // Function to handle scroll to section on the homepage
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu if it's open
    if (isMenuOpen) setIsMenuOpen(false);
    
    // Only scroll if we're on the homepage
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on homepage, navigate to homepage first, then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Code size={28} className="text-portfolio-blue" />
            <span className="text-xl font-bold text-portfolio-dark">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('footer')} className="nav-link">Contacts</button>
          </nav>

          <div className="hidden md:block">
            <Button className="btn-primary">
              Download CV
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <X size={24} className="text-portfolio-dark" />
            ) : (
              <Menu size={24} className="text-portfolio-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button onClick={() => scrollToSection('home')} className="nav-link block py-2 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link block py-2 w-full text-left">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link block py-2 w-full text-left">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link block py-2 w-full text-left">Projects</button>
            <button onClick={() => scrollToSection('footer')} className="nav-link block py-2 w-full text-left">Contacts</button>
            <Button className="btn-primary w-full mt-4">
              Download CV
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;