
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Dummy data proyek yang sama dengan di Projects.tsx
const projects = [
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description: "Website e-commerce dengan fitur lengkap menggunakan ReactJS dan Node.js. Aplikasi ini menyediakan pengalaman belanja online yang mulus dengan fitur seperti pencarian produk, keranjang belanja, pembayaran, dan administrasi produk. Dibangun dengan arsitektur frontend yang terpisah dengan backend API.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60",
    tags: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
    ],
    challenges: "Salah satu tantangan utama adalah mengimplementasikan sistem pembayaran yang aman dan terintegrasi dengan berbagai metode pembayaran. Selain itu, optimisasi performa menjadi fokus utama untuk memastikan pengalaman pengguna yang baik.",
    solutions: "Menggunakan lazy loading untuk gambar produk dan memecah bundle Javascript menjadi beberapa chunk yang lebih kecil untuk meningkatkan performa. Mengimplementasikan state management yang efisien dengan Redux untuk pengelolaan keranjang belanja dan proses checkout.",
    tech_stack: "Frontend: ReactJS, Redux, Tailwind CSS. Backend: Node.js, Express, MongoDB. Payment: Stripe API. Deployment: Docker, AWS."
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Aplikasi web untuk manajemen tugas dengan VueJS dan Firebase. Memungkinkan pengguna untuk membuat, mengatur, dan melacak tugas dengan mudah. Fitur utama termasuk kategorisasi tugas, pengingat tenggat waktu, dan pembagian tugas dengan tim.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60",
    tags: ["VueJS", "Firebase", "Vuex"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60"
    ],
    challenges: "Tantangan utama adalah mendesain struktur data Firebase yang efisien untuk menangani pembaruan real-time dan memastikan sinkronisasi data yang lancar antar perangkat.",
    solutions: "Mengimplementasikan arsitektur berbasis komponen yang dapat digunakan kembali dan memanfaatkan Vuex untuk pengelolaan state. Menggunakan Firebase Cloud Functions untuk logika backend seperti notifikasi dan pemrosesan data terjadwal.",
    tech_stack: "Frontend: VueJS, Vuex, Vue Router. Backend: Firebase Firestore, Authentication, Cloud Functions. Deployment: Firebase Hosting."
  },
  {
    id: "android-fitness",
    title: "Android Fitness App",
    description: "Aplikasi fitness untuk Android menggunakan Kotlin dan Firebase. Aplikasi ini membantu pengguna melacak aktivitas fisik, merencanakan rutinitas latihan, dan memantau kemajuan kebugaran mereka. Mendukung integrasi dengan perangkat wearable dan sensor perangkat.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60",
    tags: ["Kotlin", "Firebase", "Android"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60"
    ],
    challenges: "Tantangan utama adalah mengelola siklus hidup aplikasi dan memastikan aplikasi tetap berjalan dengan baik di berbagai perangkat Android dengan spesifikasi berbeda.",
    solutions: "Menggunakan Android Architecture Components seperti ViewModel, LiveData, dan Room untuk arsitektur aplikasi yang kuat. Mengimplementasikan pengujian unit dan UI untuk memastikan kualitas kode.",
    tech_stack: "Android SDK, Kotlin, Firebase (Firestore, Auth, Storage), Retrofit untuk API, Room Database, Material Design Components."
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Dashboard cuaca dengan data realtime menggunakan ReactJS dan OpenWeather API. Menyediakan informasi cuaca terkini dan prakiraan dengan visualisasi data yang interaktif dan responsif.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    tags: ["ReactJS", "API Integration", "Chart.js"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60"
    ],
    challenges: "Tantangan utama adalah mengoptimalkan pemanggilan API untuk mengurangi biaya dan meningkatkan performa, serta memvisualisasikan data cuaca yang kompleks dengan cara yang mudah dipahami.",
    solutions: "Mengimplementasikan strategi caching untuk data cuaca dan pengoptimalan pemanggilan API. Menggunakan Chart.js untuk visualisasi data yang interaktif dan responsif.",
    tech_stack: "ReactJS, Chart.js, OpenWeather API, CSS Modules, Jest untuk pengujian."
  }
];

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
            <p className="text-gray-600 mb-6">Proyek yang Anda cari tidak ditemukan.</p>
            <Link to="/#projects">
              <Button className="btn-primary">Kembali ke Daftar Proyek</Button>
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
            <span>Kembali ke Daftar Proyek</span>
          </Link>
          
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-white to-portfolio-light-blue p-6 rounded-lg mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-white text-portfolio-blue px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-lg mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                <Button className="btn-primary flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </Button>
              </a>
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <Button variant="outline" className="btn-outline flex items-center gap-2">
                  <Github size={16} />
                  <span>Source Code</span>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Galeri Proyek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
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
          
          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-portfolio-dark mb-4">Tantangan</h2>
              <p className="text-gray-600">{project.challenges}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-portfolio-dark mb-4">Solusi</h2>
              <p className="text-gray-600">{project.solutions}</p>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-portfolio-dark mb-4">Tech Stack</h2>
            <p className="text-gray-600">{project.tech_stack}</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;