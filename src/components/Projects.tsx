import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Website Portofolio",
    description: "Fresh from the oven. I can make it for you or your company too",
    image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731599/porto_1_pqex5m.png",
    image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731586/Porto_2_bsr63h.png",
    image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747731593/porto_3_x6coi9.png",
    tags: ["React", "Typescript", "Tailwind"],
    demoLink: "#",
    codeLink: "https://github.com/7benjamin/web-portofolio",
    featured: true
  },
  {
    id: "2",
    title: "Android Absence System",
    description: "No more paper, just quick check-ins right from your phone.",
    image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.01.21_PM_vm2nrd.jpg",
    image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728317/WhatsApp_Image_2025-05-20_at_3.02.44_PM_nrydlk.jpg",
    image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747728396/WhatsApp_Image_2025-05-20_at_3.03.50_PM_rtr2a5.jpg",
    tags: ["Android", "Java"],
    demoLink: "#",
    codeLink: "https://github.com/7benjamin/AdaAbsensiOnline",
    featured: true
  },
  {
    id: "3",
    title: "Product Branding Website",
    description: "Led this project from 2021 to early 2024. I planning, keeping things on track, and making sure hit the goals",
    image: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_1_mbat2p.png",
    image2: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_2_gvmokn.png",
    image3: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1748415255/rockaroma_3_gakpn7.png",
    tags: ["IT Project Management", "Laravel"],
    demoLink: "#",
    codeLink: "#",
    featured: true
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
            <p className="text-portfolio-blue font-medium">Projects</p>
          </div>
          <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Things I've Built</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over the years, I’ve had the chance to work on various projects across web and mobile platforms. Each one taught me something new and sharpened my skills in ReactJS, VueJS, and Android development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* <Link to={`/project/${project.id}`} className="block"> */}
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-100 group-hover:animate-slideImage1"
                  />

            {/* Image 2 */}
                  <img 
                    src={project.image2}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:animate-slideImage2"
                  />

            {/* Image 3 */}
                  <img 
                    src={project.image3}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:animate-slideImage3"
                  />
                </div>
              {/* </Link> */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-portfolio-light-blue text-portfolio-blue px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <Link to={`/project/${project.id}`} className="block"> */}
                  <h3 className="text-xl font-bold text-portfolio-dark mb-2 hover:text-portfolio-blue transition-colors">
                    {project.title}
                  </h3>
                {/* </Link> */}
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                {project.codeLink != '#' &&
                <div className="flex items-center space-x-4">
                  <a href={project.codeLink} target="_blank" className="text-portfolio-blue hover:text-blue-700 flex items-center gap-1">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {/* <Link to={`/project/${project.id}`} className="text-portfolio-blue hover:text-blue-700 ml-auto">
                    Lihat Detail
                  </Link> */}
                </div>
                }
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline">
            Lihat Semua Proyek
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;