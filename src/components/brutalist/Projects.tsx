import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Typography from './Typography';

interface ProjectItem {
  title: string;
  role: string;
  tech: string;
  description: string[];
  github?: string;
  link?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Image AI Model Trainer",
    role: "Full Stack Developer",
    tech: "Next.js, PostgreSQL, Comfy UI, Flux",
    description: [
      "Built full-stack AI model training platform using Next.js, Supabase, and Replicate",
      "Engineered complete user authentication, subscription processing, and image processing"
    ],
    github: "https://github.com/ericx1023/imageAI-subscription"
  },
  {
    title: "AI Newsletter Automation",
    role: "Full Stack Developer",
    tech: "Python, Crew AI",
    description: [
      "Developed automated newsletter generation system using Python and Crew AI",
      "Implemented intelligent content curation and summarization capabilities"
    ],
    github: "https://github.com/ericx1023/convo_newsletter_crew"
  },
  {
    title: "Contentful Blog Website",
    role: "Full Stack Developer",
    tech: "Next.js, Contentful CMS, GraphQL, ESLint/Prettier, Husky",
    description: [
      "Created a modern blog platform using Next.js and Contentful CMS",
      "Implemented micro frontend architecture and utilized GraphQL for efficient API querying",
      "Established code quality standards with ESLint/Prettier and automation"
    ],
    github: "https://github.com/ericx1023/contentful-blog",
    link: "https://psychevalley.org/"
  }
];

/**
 * Brutalist Projects component replacing Projects.tsx.
 * Grid layout with oversized borders and interactive hover states.
 */
const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Projects" className="bg-white border-b-8 border-black p-4">
      <div className="w-full max-w-6xl h-full flex flex-col border-8 border-black bg-black">
        
        {/* Section Header */}
        <div className="bg-white p-6 md:p-10 border-b-8 border-black flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <Typography variant="serif" size="giant" className="font-black uppercase leading-none">
              Featured
            </Typography>
            <Typography variant="serif" size="xl" className="font-black uppercase text-red-600">
              Projects_
            </Typography>
          </div>
          <Typography variant="pixel" size="md" className="mt-4 md:mt-0 font-bold uppercase tracking-widest italic">
            SELECT_WORKS // VER. 2026
          </Typography>
        </div>

        {/* Projects Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y-8 md:divide-y-0 md:divide-x-8 divide-black bg-black">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className={`p-8 flex flex-col bg-white hover:bg-cyan-300 transition-all duration-200 group ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="mb-6">
                <Typography variant="serif" size="lg" className="font-black uppercase leading-tight group-hover:italic">
                  {project.title}
                </Typography>
                <Typography variant="pixel" size="md" className="text-red-600 font-bold uppercase mt-1">
                  {project.role}
                </Typography>
              </div>

              <div className="flex-grow space-y-6">
                <div className="bg-black/5 p-3 border-2 border-black border-dashed">
                  <Typography variant="pixel" size="sm" className="font-bold">
                    STACK: {project.tech}
                  </Typography>
                </div>
                
                <ul className="space-y-3">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <span className="font-bold font-brutalist-pixel">»</span>
                      <p className="font-brutalist-pixel text-lg leading-snug">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="mt-8 pt-6 border-t-4 border-black flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-3 py-1 hover:bg-red-600 transition-colors">
                    <Github size={16} />
                    <Typography variant="pixel" size="xs" color="contrast" className="font-bold uppercase">Source</Typography>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
                    <ExternalLink size={16} />
                    <Typography variant="pixel" size="xs" className="font-bold uppercase group-hover:text-inherit">Demo</Typography>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
