
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative hidden md:block">
            <div className="w-full h-80 bg-portfolio-blue/5 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60"
              alt="About me"
              className="absolute -top-8 -right-8 w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-portfolio-blue/10 rounded-lg"></div>
          </div>
          
          <div>
            <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
              <p className="text-portfolio-blue font-medium">Tentang Saya</p>
            </div>
            <h2 className="text-3xl font-bold text-portfolio-dark mb-6">
              Frontend Developer dengan Passion untuk User Experience
            </h2>
            <p className="text-gray-600 mb-4">
              Saya adalah seorang frontend developer dengan keahlian utama di ReactJS dan VueJS untuk 
              pengembangan web serta Java dan Kotlin untuk pengembangan aplikasi Android.
            </p>
            <p className="text-gray-600 mb-4">
              Pengalaman saya memungkinkan untuk membangun aplikasi yang cepat, responsif dan user-friendly 
              dengan memadukan teknologi modern dan prinsip desain yang baik.
            </p>
            <p className="text-gray-600 mb-4">
              Saya senang bekerja dalam tim dan selalu bersemangat untuk mempelajari teknologi baru untuk 
              meningkatkan keterampilan dan membuat produk yang lebih baik.
            </p>
            
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-portfolio-dark mb-2">Pendidikan</h3>
                  <p className="text-gray-600">Sarjana Teknik Informatika</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-portfolio-dark mb-2">Pengalaman</h3>
                  <p className="text-gray-600">3+ Tahun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
