
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2">
            <Code size={28} className="text-portfolio-blue" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Project</a>
            {/* <a href="#contact" className="nav-link">Contact</a> */}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://res.cloudinary.com/dehbbqtu2/image/upload/fl_attachment/v1747191090/Benyamin_Saut_Oloan-resume_1_dnbmnn.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
               <Button className="btn-primary w-full">
                  Download CV
              </Button>
            </a>
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
            <a href="#home" className="nav-link block py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="nav-link block py-2" onClick={toggleMenu}>About</a>
            <a href="#skills" className="nav-link block py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="nav-link block py-2" onClick={toggleMenu}>Project</a>
            {/* <a href="#contact" className="nav-link block py-2" onClick={toggleMenu}>Contact</a> */}
            <a
              href="https://res.cloudinary.com/dehbbqtu2/image/upload/fl_attachment/v1747191090/Benyamin_Saut_Oloan-resume_1_dnbmnn.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
               <Button className="btn-primary w-full">
                  Download CV
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
