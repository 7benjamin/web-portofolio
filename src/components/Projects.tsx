
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    description: "Website e-commerce dengan fitur lengkap menggunakan ReactJS dan Node.js.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60",
    tags: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Aplikasi web untuk manajemen tugas dengan VueJS dan Firebase.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60",
    tags: ["VueJS", "Firebase", "Vuex"],
    demoLink: "#",
    codeLink: "#",
    featured: true
  },
  {
    title: "Android Fitness App",
    description: "Aplikasi fitness untuk Android menggunakan Kotlin dan Firebase.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60",
    tags: ["Kotlin", "Firebase", "Android"],
    demoLink: "#",
    codeLink: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard cuaca dengan data realtime menggunakan ReactJS dan OpenWeather API.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    tags: ["ReactJS", "API Integration", "Chart.js"],
    demoLink: "#",
    codeLink: "#",
    featured: false
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
            <p className="text-portfolio-blue font-medium">Proyek</p>
          </div>
          <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Karya Terbaru Saya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan dengan menggunakan 
            berbagai teknologi seperti ReactJS, VueJS, dan Android development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-portfolio-light-blue text-portfolio-blue px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a href={project.demoLink} className="text-portfolio-blue hover:text-blue-700 flex items-center gap-1">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a href={project.codeLink} className="text-portfolio-blue hover:text-blue-700 flex items-center gap-1">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline">
            Lihat Semua Proyek
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
