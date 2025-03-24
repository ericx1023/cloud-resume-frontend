import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  section5Opacity: any;
  section5Y: any;
};

const Projects: React.FC<Props> = ({ section5Opacity, section5Y }) => {
  return (
    <motion.div
      style={{
        opacity: section5Opacity,
        y: section5Y,
        position: 'sticky',
        top: 0,
        height: 'auto',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 4
      }}
      className="relative py-10 md:py-0"
    >
      <div className="w-full max-w-4xl mx-auto px-4 mb-32 md:pb-0 md:absolute md:top-1/2 md:-translate-y-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Image AI Model Trainer</h3>
            <p className="text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 italic mb-2">Tech stack: Next.js, PostgreSQL, Comfy UI, Flux</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li className="text-lg">Built full-stack AI model training platform using Next.js, Supabase, and Replicate, enabling streamlined image model training through Flux 1.0</li>
              <li className="text-lg">Engineered complete user authentication and data workflows using Clerk, handling image processing and model training operations</li>
            </ul>
            <div className="mt-4">
              <a href="https://github.com/ericx1023/imageAI-subscription" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">AI Newsletter Automation</h3>
            <p className="text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 italic mb-2">Tech stack: Python, Crew AI</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li className="text-lg">Developed automated newsletter generation system using Python and Crew AI</li>
              <li className="text-lg">Implemented intelligent content curation and summarization capabilities</li>
            </ul>
            <div className="mt-4">
              <a href="https://github.com/ericx1023/convo_newsletter_crew" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow md:col-span-2 mb-16 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800">Contentful Blog Website</h3>
            <p className="text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 italic mb-2">Tech stack: Next.js, Contentful CMS, GraphQL, ESLint/Prettier, Husky</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li className="text-lg">Created a modern blog platform using Next.js and Contentful CMS</li>
              <li className="text-lg">Implemented micro frontend architecture for better scalability and maintenance</li>
              <li className="text-lg">Utilized GraphQL for efficient API querying and data fetching from Contentful headless CMS</li>
              <li className="text-lg">Established code quality standards with ESLint/Prettier and Git workflow automation using Husky</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://github.com/ericx1023/contentful-blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
              <a href="https://psychevalley.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14.05 1 1 0 0 0 21.64 13Z" />
                </svg>
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 