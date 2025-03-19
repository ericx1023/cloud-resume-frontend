import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

// Replace with your API Gateway URL
const API_URL = 'YOUR_API_GATEWAY_URL';

function App() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(`${API_URL}/count`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sheng-Hao (Sheng) Wang</h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-6">Software Engineering Manager</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Sunnyvale, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:ericx1023@gmail.com" className="hover:text-blue-200">ericx1023@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1-408-515-7550</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">GitHub</a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                Software Engineering Manager with 10 years of experience driving technical excellence through strategic problem-solving, 
                critical thinking and communication. Dynamic Individual Contributor dedicated to continuous learning and personal 
                development, consistently leveraging a Growth Mindset to enhance technical and leadership capabilities.
              </p>
            </section>

            {/* Cloud Resume Challenge */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cloud Resume Stack</h2>
              <div className="grid grid-cols-2 gap-4">
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
                    <li>S3 for static website hosting</li>
                    <li>CloudFront for HTTPS security</li>
                    <li>Route 53 for custom DNS domain</li>
                    <li>DynamoDB for visitor counter database</li>
                    <li>API Gateway & Lambda for serverless API</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Backend & DevOps</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>Python with boto3 for Lambda functions</li>
                    <li>Unit testing for Python code</li>
                    <li>AWS SAM for Infrastructure as Code</li>
                    <li>GitHub for source control</li>
                    <li>GitHub Actions for CI/CD pipeline</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Documentation</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Blog post about my learning journey
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/" className="text-blue-600 hover:underline">
                        GitHub repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
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
                  <p className="text-gray-500 italic mb-2">Tech stack: Stage.js, Backbone.js, Git, Redux, Tailwind CSS, Python, Node.js, MySQL</p>
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
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Flux image AI model Trainer, AI Newsletter Automation, Blog website</h3>
                <p className="text-blue-600 font-medium">Full Stack Developer</p>
                <p className="text-gray-500 italic mb-2">Tech stack: Next.js, Supabase, Comfy UI, Flux 1.0 dev, MCP, Python, Crew ai, Micro Frontend, Contentful CMS</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  <li>Built full-stack AI model training platform using Next.js, Supabase, and Replicate, enabling streamlined image model training through Flux 1.0</li>
                  <li>Engineered complete user authentication and data workflows using Clerk, handling image processing and model training operations</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-gray-800">Frontend</h3>
                  <p className="text-gray-600">React, Angular, TypeScript, Next.js, Rx.js, Redux, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Backend</h3>
                  <p className="text-gray-600">Node.js, Python, MySQL, Supabase</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Tools & Technologies</h3>
                  <p className="text-gray-600">Git, Docker, Web Components, Micro Frontend</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Legacy Skills</h3>
                  <p className="text-gray-600">Backbone.js, Stage.js, jQuery, SVN</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
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
            </section>

            {/* Visitor Counter */}
            <section className="bg-blue-50 p-4 rounded-lg">
              <p className="text-center text-gray-600">
                Visitor Count: <span className="font-bold">
                  {visitorCount === null ? 'Loading...' : visitorCount}
                </span>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 max-w-5xl text-center text-gray-600">
          <p>© {new Date().getFullYear()} Sheng-Hao Wang</p>
          <p className="mt-2">
            <a href="/projects" className="text-blue-600 hover:underline">View more of my projects</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;