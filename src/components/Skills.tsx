
import React from 'react';

  
  const usingNow = [
  {
    title: "React",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747206371/react_nkxpec.png",
  },
  {
    title: "Vue",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747211409/vue_hmh7at.png",
  },
  {
    title: "Typescript",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747205287/typescript_jfyee1.png",
  },
  {
    title: "Javascript",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747205287/javascript_kvavxi.png",
  },
  {
    title: "GIT",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747205287/git_waob6n.png",
  },
  {
    title: "Android",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747209360/android_rk6req.png",
  },
  {
    title: "Kotlin",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747209359/kotlin_yho7ju.png",
  },
  {
    title: "Flutter",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747209689/flutter_y3feqk.png",
  }
];

  const learning = [
  {
    title: "Solidity",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747209359/solidity_bpn3hd.png",
  },
  {
    title: "Figma",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747205287/figma_i4ehxg.png",
  },
  {
    title: "My Sql",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747212421/mysql_ktal0s.png",
  },
  {
    title: "Python",
    url: "https://res.cloudinary.com/dehbbqtu2/image/upload/v1747212421/python_pnqozh.png",
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-portfolio-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
            <p className="text-portfolio-blue font-medium">Skills</p>
          </div>
          <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          A curated list of technologies I work with to build web and mobile apps that are fast, scalable, and intuitive.
          </p>
        </div>

  <div className="mb-12 max-w-2xl mx-auto mb-8">
    <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-600">USING NOW:</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-items-center">
      {usingNow.map((item, index) => (
        <div className="flex flex-col items-center transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
            <img src={item.url} className="h-12" alt={item.title} />
        <p className="mt-2 text-sm">{item.title}</p>
      </div>
          ))}
    </div>
  </div>

  <div className="mb-12 max-w-2xl mx-auto mb-8">
    <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-600">LEARNING:</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-items-center">
      {learning.map((item, index) => (
        <div className="flex flex-col items-center transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
            <img src={item.url} className="h-12" alt={item.title} />
        <p className="mt-2 text-sm">{item.title}</p>
      </div>
          ))}
    </div>
  </div>

      </div>
    </section>
  );
};

export default Skills;
