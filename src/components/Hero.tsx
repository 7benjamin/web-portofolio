
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-white to-portfolio-light-blue pt-28 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h2 className="text-lg font-semibold text-portfolio-blue mb-2">Halo, Saya adalah</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-4">Benyamin Saut Oloan</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Membangun aplikasi web dan mobile dengan pengalaman menggunakan ReactJS, VueJS, dan Android development (Java/Kotlin).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Lihat Proyek <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="btn-outline">
                Hubungi Saya
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-portfolio-blue/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="/images/profpic.jpeg"
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
