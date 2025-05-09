
import React from 'react';
import { Code, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-portfolio-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            {/* <div className="flex items-center space-x-2 mb-4">
              <Code size={28} className="text-portfolio-blue" />
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-300 mb-6">
              Frontend developer dengan fokus pada ReactJS, VueJS, dan pengembangan aplikasi Android.
            </p> */}
            <div className="flex space-x-4">
              <a href="https://github.com/7benjamin" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/benyamin-saut-oloan-b18a0213b" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:benyaminsaut@gmail.com" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className=''></div>
          
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Tentang</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Keahlian</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Proyek</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacts</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">benyaminsaut@gmail.com</li>
              <li className="text-gray-300">+62 857-1607-8763</li>
              <li className="text-gray-300">Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        
        {/* <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Portfolio Developer. Seluruh hak cipta.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
