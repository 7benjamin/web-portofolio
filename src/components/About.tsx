
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">



      <div className="section-container">
        <div className="gap-12 items-center">
          <div className='text-center'>
            <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
              <p className="text-portfolio-blue font-medium">About Me</p>
            </div>
            <h2 className="text-3xl font-bold text-portfolio-dark mb-6">
              Let’s turn ideas into real, user-friendly products.
            </h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed">
             I’m a frontend developer with over 8 years of experience crafting responsive websites and mobile apps. I specialize in ReactJS and VueJS for web, and also develop Android apps with Java and Kotlin.
            I focus on creating apps that are not only fast and functional but also easy and enjoyable to use. I believe great products come from a mix of good technology, thoughtful design, and strong teamwork.
            Whether you’re building something from scratch or improving an existing product, I’m excited to help make it happen.
            One more thing, I also interested with web3!
          </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-semibold">Software Development</h3>
          <p className="text-sm mt-2 text-gray-400">8+ Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Front End Developer</h3>
          <p className="text-sm mt-2 text-gray-400">3+ Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Android Developer</h3>
          <p className="text-sm mt-2 text-gray-400">5+ Years Experience</p>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
