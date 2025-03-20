import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  section2Opacity: any;
  section2Y: any;
};

const ProfessionalSummary: React.FC<Props> = ({ section2Opacity, section2Y }) => {
  return (
    <motion.div
      style={{
        opacity: section2Opacity,
        y: section2Y,
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className="relative"
    >
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto px-4 absolute top-1/2 -translate-y-1/2">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed font-merriweather">
            Frontend Engineer with 10+ years of experience architecting scalable web applications and driving technical excellence. 
            Expertise in <span className="bg-yellow-100 text-yellow-800 px-1 rounded">React</span>, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Angular</span>, and modern frontend frameworks, with a proven track record implementing frontend architectures and <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Web Components</span>. 
            Recognized for technical mentorship, establishing engineering best practices, and successfully migrating legacy systems to modern stacks while maintaining production reliability.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">Technical Skills</h2>
          <div className="space-y-2 font-merriweather">
            <div>
              <h3 className="font-medium text-gray-800">Frontend</h3>
              <p className="text-gray-600">
                <span className="bg-yellow-100 text-yellow-800 px-1 rounded">React</span>,
                <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Angular</span>,
                TypeScript, Next.js, Rx.js, Redux, Tailwind CSS
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Backend</h3>
              <p className="text-gray-600">Node.js, Python, PostgreSQL, Supabase, Firebase</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Tools & Technologies</h3>
              <p className="text-gray-600">Git, Docker, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Web Components</span>, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Micro Frontend</span></p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Legacy Skills</h3>
              <p className="text-gray-600">Backbone.js, Stage.js, jQuery, SVN</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalSummary; 