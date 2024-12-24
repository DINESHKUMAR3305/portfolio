import React from 'react';
import { Code, Database, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="h-6 w-6" />,
    skills: ['Python', 'Dart', 'C', 'R']
  },
  {
    title: 'Frameworks & Tools',
    icon: <Terminal className="h-6 w-6" />,
    skills: ['Flutter', 'TensorFlow', 'neo4j', 'MySQL', 'Weka']
  },
  {
    title: 'Technologies',
    icon: <Cpu className="h-6 w-6" />,
    skills: ['IoT', 'Neural Network']
  }
];

const SkillCard = ({ category }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
        {category.icon}
      </div>
      <h3 className="ml-3 text-lg font-semibold text-gray-900">
        {category.title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;