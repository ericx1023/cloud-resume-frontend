import React from 'react';

type Props = {};

const ProfessionalSummary: React.FC<Props> = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative px-4 py-16 bg-gray-100"
    >
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Frontend Engineer with 10+ years of experience architecting scalable web applications and driving technical excellence. 
              Expertise in <span className="bg-yellow-100 text-yellow-800 px-1 rounded">React</span>, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Angular</span>, and modern frontend frameworks, with a proven track record implementing frontend architectures and <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Next.js</span>. 
              Recognized for technical mentorship, establishing engineering best practices, and successfully migrating legacy systems to modern stacks while maintaining production reliability.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-medium text-gray-800">Frontend</h3>
                <p className="text-gray-600 text-lg">
                  <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Angular</span>,
                  <span className="bg-yellow-100 text-yellow-800 px-1 rounded">React</span>,
                  TypeScript, Rx.js, Redux, Tailwind CSS
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Backend</h3>
                <p className="text-gray-600 text-lg">Node.js, Python, Next.js, GraphQL, REST APIs</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Tools & Technologies</h3>
                <p className="text-gray-600 text-lg">Git, Docker, PostgreSQL, Supabase, Firebase, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Web Components</span></p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Other Skills</h3>
                <p className="text-gray-600 text-lg">Backbone.js, Stage.js, jQuery, SVN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary; 