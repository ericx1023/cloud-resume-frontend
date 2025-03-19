import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  section4Opacity: any;
  section4Y: any;
  cloudResumeRef: React.RefObject<HTMLDivElement>;
  isBlinking: boolean;
};

const Projects: React.FC<Props> = ({ section4Opacity, section4Y, cloudResumeRef, isBlinking }) => {
  return (
    <motion.div
      ref={cloudResumeRef}
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
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto px-4 absolute top-1/2 -translate-y-1/2">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Flux Image AI Model Trainer</h3>
              <p className="text-blue-600 font-medium">Full Stack Developer</p>
              <p className="text-gray-500 italic mb-2">Tech stack: Next.js, Supabase, Comfy UI, Flux 1.0 dev</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Built full-stack AI model training platform using Next.js, Supabase, and Replicate, enabling streamlined image model training through Flux 1.0</li>
                <li>Engineered complete user authentication and data workflows using Clerk, handling image processing and model training operations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">AI Newsletter Automation</h3>
              <p className="text-blue-600 font-medium">Full Stack Developer</p>
              <p className="text-gray-500 italic mb-2">Tech stack: Python, Crew AI</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Developed automated newsletter generation system using Python and Crew AI</li>
                <li>Implemented intelligent content curation and summarization capabilities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">Blog Website</h3>
              <p className="text-blue-600 font-medium">Full Stack Developer</p>
              <p className="text-gray-500 italic mb-2">Tech stack: Next.js, Contentful CMS</p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Created a modern blog platform using Next.js and Contentful CMS</li>
                <li>Implemented micro frontend architecture for better scalability and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <motion.h2 
            className="text-2xl font-bold text-gray-800 mb-4"
            animate={{
              backgroundColor: isBlinking 
                ? [
                    'rgba(255, 255, 0, 0)',
                    'rgba(255, 255, 0, 0.3)',
                    'rgba(255, 255, 0, 0)',
                    'rgba(255, 255, 0, 0.3)',
                    'rgba(255, 255, 0, 0)'
                  ]
                : 'rgba(255, 255, 0, 0)'
            }}
            transition={{
              duration: 2, // 增加動畫持續時間
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut"
            }}
          >
            Cloud Resume Stack
          </motion.h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800">Frontend</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>HTML & CSS for structure and styling</li>
                <li>React.js with TypeScript</li>
                <li>JavaScript for visitor counter functionality</li>
                <li>Tailwind CSS for responsive design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">AWS Services</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li><span className="bg-yellow-100 text-yellow-800 px-1 rounded">S3</span> for React website hosting</li>
                <li><span className="bg-yellow-100 text-yellow-800 px-1 rounded">CloudFront</span> for HTTPS security</li>
                <li><span className="">Route 53</span> for custom DNS domain</li>
                <li><span className="">DynamoDB</span> for visitor counter database</li>
                <li>API Gateway & Lambda for serverless API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Backend & DevOps</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Python with boto3 for <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Lambda</span> functions</li>
                <li>Unit testing for Python code</li>
                <li>AWS SAM for Infrastructure as Code</li>
                <li>GitHub for source control</li>
                <li>GitHub Actions for <span className="bg-yellow-100 text-yellow-800 px-1 rounded">CI/CD</span> pipeline</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Documentation</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>
                  <a href="https://psychevalley.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Headless CMS Blog Project
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ericx1023" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub repositories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 