import React from 'react';
import { Github, Globe } from 'lucide-react';

// Updated projects array with images
const projects = [
  {
    title: 'Speed Limit Automation',
    category: 'IoT',
    description: [
      'Achieved 95% accuracy in adjusting the speed of cars within 2 seconds of signal detection.',
      'Reduced speeding cases by 45% and increased speed limit observance to 98% using this system.'
    ],
    image: 'src/assets/speed-limit.jpg', // Replace with the correct path to your image
  },
  {
    title: 'Crash Detection',
    category: 'IoT',
    description: [
      'Designed a system that sends radio signals to nearby devices when a car crashes in remote areas.',
      'Signals are relayed to emergency services once network coverage is available.',
      'Reduced emergency response times by 68% and increased rescue efficiency by 75%.'
    ],
    image: 'src/assets/crash-detection.jpg', // Replace with the correct path to your image
  },
  {
    title: 'Turf Slot Booking App',
    category: 'Flutter',
    description: [
      'Developed a Flutter-based app that allows users to browse, book, and manage turf reservations seamlessly.',
      'Features a user-friendly interface and real-time slot availability.',
      'Simplifies the booking and management process for both players and turf owners.'
    ],
    image: 'src/assets/turf-booking.jpg', // Replace with the correct path to your image
  },
  {
    title: 'Smart Retail Pricing',
    category: 'AI/ML',
    description: [
      'Built a neural network model to suggest new product prices based on demand.',
      'Optimized stock levels for efficient inventory management.'
    ],
    image: 'src/assets/retail-pricing.jpg', // Replace with the correct path to your image
  }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 object-cover rounded-t-lg mb-4"
    />
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="flex space-x-2">
        <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Github size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Globe size={20} />
        </a>
      </div>
    </div>
    <ul className="space-y-2">
      {project.description.map((desc, index) => (
        <li key={index} className="text-gray-600 text-sm">
          • {desc}
        </li>
      ))}
    </ul>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
