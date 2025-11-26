
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from './pages-data/ProjectsData';

// Dummy data proyek yang sama dengan di Projects.tsx
// const projects = [
//   {
//     id: "1",
//     title: "E-commerce Website",
//     description: "Website e-commerce dengan fitur lengkap menggunakan ReactJS dan Node.js. Aplikasi ini menyediakan pengalaman belanja online yang mulus dengan fitur seperti pencarian produk, keranjang belanja, pembayaran, dan administrasi produk. Dibangun dengan arsitektur frontend yang terpisah dengan backend API.",
//     tags: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
//     demoLink: "https://benjamin-portofolio.netlify.app/",
//     codeLink: "https://github.com/7benjamin/web-portofolio",
//     featured: true,
//     gallery: [
//       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
//     ],
//     challenges: "Salah satu tantangan utama adalah mengimplementasikan sistem pembayaran yang aman dan terintegrasi dengan berbagai metode pembayaran. Selain itu, optimisasi performa menjadi fokus utama untuk memastikan pengalaman pengguna yang baik.",
//     solutions: "Menggunakan lazy loading untuk gambar produk dan memecah bundle Javascript menjadi beberapa chunk yang lebih kecil untuk meningkatkan performa. Mengimplementasikan state management yang efisien dengan Redux untuk pengelolaan keranjang belanja dan proses checkout.",
//     tech_stack: "Frontend: ReactJS, Redux, Tailwind CSS. Backend: Node.js, Express, MongoDB. Payment: Stripe API. Deployment: Docker, AWS."
//   },
// ];

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-portfolio-dark mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project is not found. Find another project</p>
            <Link to="/#projects">
              <Button className="btn-primary">Back</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="pt-28 pb-16 flex-grow">
        <div className="section-container">
          <Link to="/#projects" className="inline-flex items-center text-portfolio-blue hover:underline mb-6">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back</span>
          </Link>

          {/* Hero Section */}
          <div className="bg-gradient-to-br from-white to-portfolio-light-blue p-6 rounded-lg mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-portfolio-blue text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-gray-600 text-lg mb-8 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.detailDescription }}></div>
            <div className="flex flex-wrap gap-4">
              {project.demoLink != '' &&
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <Button className="btn-primary flex items-center gap-2">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                </a>
              }
              {project.codeLink != '' &&
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="btn-outline flex items-center gap-2">
                    <Github size={16} />
                    <span>Source Code</span>
                  </Button>
                </a>
              }

            </div>
          </div>
          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery && project.gallery != undefined && project.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;