
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {

  const profpic = "/images/profpic.jpeg"
  // const profpic = "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747190434/profpic_rvnrrx.jpg"
  return (
    <section id="home" className="bg-gradient-to-br from-white to-portfolio-light-blue pt-28 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
          {/* Mobile image */}
          <div className="flex justify-center md:hidden mb-8">
            <img
            src={profpic}
            alt="Developer"
            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
            />
            </div>
            <h2 className="text-lg font-semibold text-portfolio-blue mb-2">Halo, I'm</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-4">Benyamin Saut Oloan</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
            A frontend specialist who crafts fast, elegant web apps with React and Vue. I also build Android apps in Java and Kotlin. I turn complex problems into simple, delightful interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
            <Button asChild>
                <a href="#projects" className="nav-link">
                    My Project <ArrowRight size={16} />
                </a>
            </Button>

              <Button variant="outline" className="btn-outline">
                <a href="mailto:benyaminsaut@gmail.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  Contact
                </a>
              </Button>
            </div>
          </div>
          {/* Desktop image */}
          <div className="hidden md:flex justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-portfolio-blue/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={profpic}
                    alt="Developer"
                  className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
