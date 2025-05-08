
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-portfolio-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
            <p className="text-portfolio-blue font-medium">Kontak</p>
          </div>
          <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Mari Terhubung</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tertarik untuk bekerja sama? Hubungi saya melalui formulir di bawah ini atau 
            melalui informasi kontak yang tersedia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-bold text-portfolio-dark mb-6">Kirim Pesan</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="Nama Lengkap"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="email@contoh.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="Subjek Pesan"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              
              <Button className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={16} />
                Kirim Pesan
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-portfolio-dark mb-6">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light-blue p-3 rounded-md">
                  <Mail className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-dark">Email</h4>
                  <p className="text-gray-600">email@contoh.com</p>
                  <p className="text-gray-500 text-sm mt-1">Balas dalam 1-2 hari kerja</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light-blue p-3 rounded-md">
                  <Phone className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-dark">Telepon</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                  <p className="text-gray-500 text-sm mt-1">Senin-Jumat, 9:00-17:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light-blue p-3 rounded-md">
                  <MapPin className="text-portfolio-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-dark">Lokasi</h4>
                  <p className="text-gray-600">Jakarta, Indonesia</p>
                  <p className="text-gray-500 text-sm mt-1">Terbuka untuk remote work</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-portfolio-dark mb-4">Jadwal Konsultasi</h4>
              <p className="text-gray-600 mb-4">
                Anda dapat menjadwalkan panggilan video 30 menit untuk membahas proyek Anda.
              </p>
              <Button variant="outline" className="btn-outline w-full">
                Jadwalkan Panggilan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
