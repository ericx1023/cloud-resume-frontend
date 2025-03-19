import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Replace with your API Gateway URL
const API_URL = 'https://5udg206bdk.execute-api.us-east-1.amazonaws.com/Prod';

function App() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const apiCalledRef = useRef(false);
  const { scrollYProgress } = useScroll();
  const cloudResumeRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  // 調整滾動效果的時機
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.35, 0.35, 0.5], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.15, 0.35], [50, 0]);

  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.75, 0.75, 0.85], [0, 1, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.5, 0.75], [50, 0]);

  const section4Opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const section4Y = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  useEffect(() => {
    const fetchCount = async () => {
      if (apiCalledRef.current) return;
      apiCalledRef.current = true;

      try {
        const response = await fetch(`${API_URL}/count`, {
          method: 'GET',
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

  const handleVisitorClick = () => {
    cloudResumeRef.current?.scrollIntoView({ behavior: 'smooth' });
    // 等待滾動完成後再開始閃爍
    setTimeout(() => {
      setIsBlinking(true);
      // 4秒後停止閃爍
      setTimeout(() => setIsBlinking(false), 4000);
    }, 1000); // 等待1秒讓滾動完成
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="relative">
        {/* Section 1: Header/Hero Section */}
        <motion.div
          style={{
            opacity: section1Opacity,
            y: section1Y,
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="w-screen left-1/2 -translate-x-1/2 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent text-white"
        >
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sheng-Hao (Sheng) Wang</h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6">Software Engineering Manager</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Sunnyvale, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:ericx1023@gmail.com" className="hover:text-gray-200">ericx1023@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1-408-515-7550</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">GitHub</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">LinkedIn</a>
              </div>
            </div>
            {/* Visitor Counter */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 p-4 rounded-lg mt-8 cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={handleVisitorClick}
            >
              <p className="text-center text-gray-600">
                {visitorCount === null ? (
                  'Loading...'
                ) : (
                  <>
                    You are the <span className="font-bold">
                      {visitorCount}
                      <sup className="ml-0.5">
                        {(() => {
                          if (!visitorCount) return '';
                          const lastDigit = visitorCount % 10;
                          const lastTwoDigits = visitorCount % 100;
                          
                          // 特殊情況：11, 12, 13 都用 'th'
                          if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return 'th';
                          
                          // 其他情況
                          switch (lastDigit) {
                            case 1: return 'st';
                            case 2: return 'nd';
                            case 3: return 'rd';
                            default: return 'th';
                          }
                        })()}
                      </sup>
                    </span> visitor
                  </>
                )}
              </p>
            </motion.section>

          </div>
        </motion.div>

        {/* Section 2: Professional Summary & Technical Skills */}
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                Frontend Engineer with 10+ years of experience architecting scalable web applications and driving technical excellence. 
                Expertise in <span className="bg-yellow-100 text-yellow-800 px-1 rounded">React</span>, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Angular</span>, and modern frontend frameworks, with a proven track record implementing frontend architectures and <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Web Components</span>. 
                Recognized for technical mentorship, establishing engineering best practices, and successfully migrating legacy systems to modern stacks while maintaining production reliability.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h2>
              <div className="space-y-2">
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

        {/* Section 3: Work Experience & Education */}
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

        {/* Section 4: Projects & Cloud Resume Stack */}
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
                  <h3 className="font-medium text-gray-800" >AWS Services</h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1 ">
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
                    <li>GitHub Actions for  <span className="bg-yellow-100 text-yellow-800 px-1 rounded">CI/CD</span> pipeline</li>
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
      </main>

    </div>
  );
}

export default App;