import React from 'react';

type Props = {};

const Projects: React.FC<Props> = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Flux Image AI Model Trainer</h3>
          <p className="text-blue-600 font-medium">Full Stack Developer</p>
          <p className="text-gray-500 italic mb-2">Tech stack: Next.js, Supabase, Comfy UI, Flux 1.0 dev</p>
          <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
            <li className="text-lg">Built full-stack AI model training platform using Next.js, Supabase, and Replicate, enabling streamlined image model training through Flux 1.0</li>
            <li className="text-lg">Engineered complete user authentication and data workflows using Clerk, handling image processing and model training operations</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">AI Newsletter Automation</h3>
          <p className="text-blue-600 font-medium">Full Stack Developer</p>
          <p className="text-gray-500 italic mb-2">Tech stack: Python, Crew AI</p>
          <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
            <li className="text-lg">Developed automated newsletter generation system using Python and Crew AI</li>
            <li className="text-lg">Implemented intelligent content curation and summarization capabilities</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800">Blog Website</h3>
          <p className="text-blue-600 font-medium">Full Stack Developer</p>
          <p className="text-gray-500 italic mb-2">Tech stack: Next.js, Contentful CMS</p>
          <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
            <li className="text-lg">Created a modern blog platform using Next.js and Contentful CMS</li>
            <li className="text-lg">Implemented micro frontend architecture for better scalability and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects; 