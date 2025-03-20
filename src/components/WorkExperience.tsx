import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  section3Opacity: any;
  section3Y: any;
};

const WorkExperience: React.FC<Props> = ({ section3Opacity, section3Y }) => {
  return (
    <motion.div
      style={{
        opacity: section3Opacity,
        y: section3Y,
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className="relative"
    >
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto px-4 absolute top-1/2 -translate-y-1/2">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Software Development Manager</h3>
              <p className="text-blue-600 font-medium">Fortinet, Inc. | Feb 2022 - Present</p>
              <p className="text-gray-500 italic mb-2">Tech stack: React, Angular, TypeScript, Rx.js, Next.js, Docker, Web Component</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Led and mentored a team of 4+ frontend engineers, implementing agile methodologies that improved sprint velocity</li>
                <li>Introduced Web Components strategy and drove the migration from legacy Backbone application to modern Angular stack and Micro Frontend</li>
                <li>Established coding standards and review processes, resulting in reduction of production bugs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Senior Software Development Engineer</h3>
              <p className="text-blue-600 font-medium">Fortinet, Inc. Taiwan | Aug 2017 - Feb 2022</p>
              <p className="text-gray-500 italic mb-2">Tech stack: Stage.js, Backbone.js, Git, Redux, Tailwind CSS, Python, Node.js, PostgreSQL</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Developed and maintained key features for Fortinet's Load Balancer DDoS Defender</li>
                <li>Implemented responsive design principles using Tailwind CSS, significantly reducing custom CSS code</li>
                <li>Enhanced frontend performance through performance insights, reducing initial load time by half</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Frontend Web Developer</h3>
              <p className="text-blue-600 font-medium">Jumbo Technology Corp | Jan 2015 - Aug 2017</p>
              <p className="text-gray-500 italic mb-2">Tech stack: Javascript, JQuery, HTML, CSS, SVN</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Developed and maintained responsive web applications using JavaScript and jQuery, serving 5,000+ users</li>
                <li>Collaborated with UX designers to implement pixel-perfect interfaces across multiple browsers and devices</li>
                <li>Created reusable UI components library, increasing development efficiency</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800">PC School Taiwan</h3>
              <p className="text-gray-600">Java programming & Android Development</p>
              <p className="text-gray-600">Feb 2014 - Dec 2014</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">University of Kent, Canterbury, UK</h3>
              <p className="text-gray-600">MSc. Group Processing and Intergroup Relations</p>
              <p className="text-gray-600">Aug 2005 - Aug 2006</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Chun-Yuan Christian University</h3>
              <p className="text-gray-600">Bachelor of Psychology</p>
              <p className="text-gray-600">Sep 1998 - Sep 2003</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience; 