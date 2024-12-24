import React from 'react';
import { Briefcase } from 'lucide-react';

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Work Experience
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Briefcase className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Web Development Intern
              </h3>
              <p className="text-indigo-600 font-medium mb-4">MagnusVista Labs</p>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  • Collaborated in designing and developing responsive web applications using React
                </li>
                <li className="text-gray-600">
                  • Built dynamic and interactive components with React.js
                </li>
                <li className="text-gray-600">
                  • Integrated RESTful APIs for real-time data synchronization
                </li>
                <li className="text-gray-600">
                  • Optimized web performance and ensured cross-browser compatibility
                </li>
                <li className="text-gray-600">
                  • Worked closely with the team to implement innovative features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;