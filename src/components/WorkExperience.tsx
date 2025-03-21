import React from 'react';
import { Timeline } from './ui/timeline';

type Props = {};

const WorkExperience: React.FC<Props> = () => {
  const experiences = [
    {
      title: "2022 - Present",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Software Development Manager</h3>
          <p className="text-blue-600 font-medium">Fortinet, Inc.</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Tech stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["React", "Angular", "TypeScript", "Rx.js", "Next.js", "Docker", "Web Component"].map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-sm md:text-base">
              Led and mentored a team of 4+ frontend engineers, implementing agile methodologies that improved sprint velocity
            </li>
            <li className="text-gray-600 text-sm md:text-base">
              Introduced Web Components strategy and drove the migration from legacy Backbone application to modern Angular stack and Micro Frontend
            </li>
            <li className="text-gray-600 text-sm md:text-base">
              Established coding standards and review processes, resulting in reduction of production bugs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2017 - 2022",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Senior Software Development Engineer</h3>
          <p className="text-blue-600 font-medium">Fortinet, Inc. Taiwan</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Tech stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Stage.js", "Backbone.js", "Git", "Redux", "Tailwind CSS", "Python", "Node.js", "PostgreSQL"].map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-sm md:text-base">
              Developed and maintained key features for Fortinet's Load Balancer DDoS Defender
            </li>
            <li className="text-gray-600 text-sm md:text-base">
              Implemented responsive design principles using Tailwind CSS, significantly reducing custom CSS code
            </li>
            <li className="text-gray-600 text-sm md:text-base">
              Enhanced frontend performance through performance insights, reducing initial load time by half
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2015 - 2017",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Frontend Web Developer</h3>
          <p className="text-blue-600 font-medium">Jumbo Technology Corp</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Tech stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Javascript", "JQuery", "HTML", "CSS", "SVN"].map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-sm md:text-base">
              Developed and maintained responsive web applications using JavaScript and jQuery, serving 5,000+ users
            </li>
            <li className="text-gray-600 text-sm md:text-base">
              Collaborated with UX designers to implement pixel-perfect interfaces across multiple browsers and devices
            </li>
            <li className="text-gray-600 text-sm md:text-base">
              Created reusable UI components library, increasing development efficiency
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Timeline data={experiences} />
  );
};

export default WorkExperience; 