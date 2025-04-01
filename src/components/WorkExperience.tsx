import React from 'react';
import { Timeline } from './ui/timeline';

type Props = {
  // 移除不需要的 props
};

const WorkExperience: React.FC<Props> = () => {
  const experiences = [
    {
      title: "2022 - Present",
      content: (
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-3 hover:shadow-md transition-shadow">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Staff Software Development Engineer</h3>
          <p className="text-blue-600 font-medium">Fortinet, Inc.</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Tech stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["React", "Angular", "Rx.js", "TypeScript","Next.js", "Docker", "Web Component"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-base md:text-lg">
              Led and mentored a team of 4+ frontend engineers, implementing agile methodologies that improved sprint velocity
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Introduced Web Components strategy and drove the migration from legacy Backbone application to modern Angular stack and Micro Frontend
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Established coding standards and review processes, resulting in reduction of production bugs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2017 - 2022",
      content: (
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-3 hover:shadow-md transition-shadow">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Senior Software Development Engineer</h3>
          <p className="text-blue-600 font-medium">Fortinet, Inc. Taiwan</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Tech stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Stage.js", "Backbone.js", "Git", "Redux", "Tailwind CSS", "Python", "Node.js", "PostgreSQL"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-base md:text-lg">
              Developed and maintained key features for Fortinet's Load Balancer DDoS Defender
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Implemented responsive design principles using Tailwind CSS, significantly reducing custom CSS code
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Enhanced frontend performance through performance insights, reducing initial load time by half
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2015 - 2017",
      content: (
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Frontend Web Developer</h3>
          <p className="text-blue-600 font-medium">Jumbo Technology Corp</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Tech stack:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Javascript", "JQuery", "HTML", "CSS", "SVN"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-base md:text-lg">
              Developed and maintained responsive web applications using JavaScript and jQuery, serving 5,000+ users
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Collaborated with UX designers to implement pixel-perfect interfaces across multiple browsers and devices
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Created reusable UI components library, increasing development efficiency
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Timeline 
      data={experiences}
      title="Work Experience"
      subtitle="My professional software development journey"
    />
  );
};

export default WorkExperience; 