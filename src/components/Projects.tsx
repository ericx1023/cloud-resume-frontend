import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  section4Opacity: any;
  section4Y: any;
};

const Projects: React.FC<Props> = ({ section4Opacity, section4Y }) => {
  return (
    <motion.div
      style={{
        opacity: section4Opacity,
        y: section4Y,
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className="relative"
    >
      <div className="w-full max-w-4xl mx-auto px-4 absolute top-1/2 -translate-y-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-montserrat">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 font-montserrat">Flux Image AI Model Trainer</h3>
            <p className="text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 italic mb-2 font-roboto-slab">Tech stack: Next.js, Supabase, Comfy UI, Flux 1.0 dev</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 font-merriweather">
              <li>Built full-stack AI model training platform using Next.js, Supabase, and Replicate, enabling streamlined image model training through Flux 1.0</li>
              <li>Engineered complete user authentication and data workflows using Clerk, handling image processing and model training operations</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 font-montserrat">AI Newsletter Automation</h3>
            <p className="text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 italic mb-2 font-roboto-slab">Tech stack: Python, Crew AI</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 font-merriweather">
              <li>Developed automated newsletter generation system using Python and Crew AI</li>
              <li>Implemented intelligent content curation and summarization capabilities</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 font-montserrat">Blog Website</h3>
            <p className="text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 italic mb-2 font-roboto-slab">Tech stack: Next.js, Contentful CMS</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 font-merriweather">
              <li>Created a modern blog platform using Next.js and Contentful CMS</li>
              <li>Implemented micro frontend architecture for better scalability and maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 