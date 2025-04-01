import React from 'react';
import styles from './CloudResumeStack.module.css';

type Props = {
  cloudResumeRef: React.RefObject<HTMLDivElement>;
  isBlinking: boolean;
};

const CloudResumeStack: React.FC<Props> = ({ cloudResumeRef, isBlinking }) => {
  return (
    <div
      ref={cloudResumeRef}
      className="min-h-screen flex items-center justify-center relative bg-gray-100 px-4 py-16"
    >
      <div className="max-w-3xl mx-auto w-full bg-white shadow-lg rounded-lg p-8">
        <h2 
          className="text-3xl font-bold mb-6 text-center"
        >
          Site Tech Stack
        </h2>
        <div className="bg-white shadow-xl rounded-lg p-6 space-y-6">
          <div>
            <h3 className="text-xl md:text-xl font-medium text-gray-800 border-b pb-2 font-bold">AWS Services</h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">S3</span>
                <span className="text-gray-600">for React website hosting</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">CloudFront</span>
                <span className="text-gray-600">for HTTPS security</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">Route 53</span>
                <span className="text-gray-600">for custom DNS domain</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">DynamoDB</span>
                <span className="text-gray-600">for visitor counter database</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">API Gateway</span>
                <span className="text-gray-600">for serverless REST API</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">Lambda</span>
                <span className="text-gray-600">for serverless functions</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl md:text-xl font-medium text-gray-800 border-b pb-2 font-bold">Frontend</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">React.js</span>
                  <span>with TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">Tailwind CSS</span>
                  <span>for responsive design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">CSS Transitions</span>
                  <span>for smooth interactions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">JavaScript</span>
                  <span>for visitor counter</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl md:text-xl font-medium text-gray-800 border-b pb-2 font-bold">Backend & DevOps</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">Python</span>
                  <span>with boto3 for Lambda</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">AWS SAM</span>
                  <span>for Infrastructure as Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">GitHub</span>
                  <span>for source control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">GitHub Actions</span>
                  <span>for CI/CD pipeline</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-xl font-medium text-gray-800 border-b pb-2 font-bold">Documentation</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a 
                href="https://github.com/ericx1023/cloud-resume-frontend" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub Repository
              </a>
              <a 
                href="https://psychevalley.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Headless CMS Blog Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudResumeStack; 