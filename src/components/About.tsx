
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Desktop image */}
          <div className="relative hidden md:block">
            <div className="w-full h-80 bg-portfolio-blue/5 rounded-lg"></div>
            <img
              src="/images/aboutme.jpeg"
              alt="About me"
              className="absolute -top-8 -right-8 w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-portfolio-blue/10 rounded-lg"></div>
          </div>
          {/* Mobile image */}
          <div className="relative block md:hidden mb-6"> 
          <img
            src="/images/aboutme.jpeg"
            alt="About me"
           className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
          
          <div>
            <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
              <p className="text-portfolio-blue font-medium">About Me</p>
            </div>
            <h2 className="text-3xl font-bold text-portfolio-dark mb-6">
              Let’s turn ideas into real, user-friendly products.
            </h2>
            <p className="text-gray-600 mb-4">
            I’m a frontend developer with over 8 years of experience crafting responsive websites and mobile apps. I specialize in ReactJS and VueJS for web, and also develop Android apps with Java and Kotlin.
            </p>
            <p className="text-gray-600 mb-4">
            I focus on creating apps that are not only fast and functional but also easy and enjoyable to use. I believe great products come from a mix of good technology, thoughtful design, and strong teamwork.
            </p>
            <p className="text-gray-600 mb-4">
            Whether you’re building something from scratch or improving an existing product, I’m excited to help make it happen.
            </p>
            <p className="text-gray-600 mb-4">
            One more thing, I also interested with web3!
            </p>
            
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-portfolio-dark mb-2">Education</h3>
                  <p className="text-gray-600">Bachelor Degree of Informatics Engineering</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-portfolio-dark mb-2">Experience</h3>
                  <p className="text-gray-600">8+ Years of Software Development</p>
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
