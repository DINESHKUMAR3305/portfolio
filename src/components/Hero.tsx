import React from 'react';
import { FileText } from 'lucide-react';
import resume from './resume.pdf'; // Import the resume
import profileImage from '/src/assets/profile.jpg'; // Use absolute path from 'src/assets'

const Hero = () => {
  const handleDownload = () => {
    window.open(resume, '_blank'); // Open the resume in a new tab
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Circular Image */}
        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Dinesh Kumar"
            className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          DINESHKUMAR R
        </h1>
        <h2 className="text-xl sm:text-2xl text-indigo-600 mb-8">
          Artificial Intelligence and Data Science Student
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I am an Artificial Intelligence and Data Science student with a keen
          interest in exploring and learning about emerging technologies. I am
          always eager to stay updated with the latest advancements and
          innovations in the tech world.
        </p>

        {/* Button */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
        >
          <FileText className="mr-2" size={20} />
          View Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
