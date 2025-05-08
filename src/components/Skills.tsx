
import React from 'react';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "VueJS", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Java", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Android SDK", level: 85 },
      { name: "React Native", level: 75 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "RESTful API", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "UI/UX Design", level: 70 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-portfolio-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block bg-portfolio-light-blue px-4 py-1 rounded-full mb-4">
            <p className="text-portfolio-blue font-medium">Keahlian</p>
          </div>
          <h2 className="text-3xl font-bold text-portfolio-dark mb-4">Teknologi yang Saya Kuasai</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berikut adalah daftar teknologi dan alat yang saya gunakan untuk membangun aplikasi web 
            dan mobile yang modern, responsif, dan user-friendly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="text-xl font-bold text-portfolio-dark mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-portfolio-blue h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
