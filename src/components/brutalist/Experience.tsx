import React from 'react';
import SectionWrapper from './SectionWrapper';
import Typography from './Typography';

interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  tech: string[];
  points: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2022 - PRESENT",
    company: "Fortinet, Inc.",
    role: "Staff Software Development Engineer",
    tech: ["React", "Angular", "Rx.js", "TypeScript", "Next.js", "Docker", "Web Component"],
    points: [
      "Led and mentored a team of 4+ frontend engineers, implementing agile methodologies that improved sprint velocity",
      "Introduced Web Components strategy and drove the migration from legacy Backbone application to modern Angular stack and Micro Frontend",
      "Established coding standards and review processes, resulting in reduction of production bugs"
    ]
  },
  {
    period: "2017 - 2022",
    company: "Fortinet, Inc. Taiwan",
    role: "Senior Software Development Engineer",
    tech: ["Stage.js", "Backbone.js", "Git", "Redux", "Tailwind CSS", "Python", "Node.js", "PostgreSQL"],
    points: [
      "Developed and maintained key features for Fortinet's Load Balancer DDoS Defender",
      "Implemented responsive design principles using Tailwind CSS, significantly reducing custom CSS code",
      "Enhanced frontend performance through performance insights, reducing initial load time by half"
    ]
  },
  {
    period: "2015 - 2017",
    company: "Jumbo Technology Corp",
    role: "Frontend Web Developer",
    tech: ["Javascript", "JQuery", "HTML", "CSS", "SVN"],
    points: [
      "Developed and maintained responsive web applications using JavaScript and jQuery, serving 5,000+ users",
      "Collaborated with UX designers to implement pixel-perfect interfaces across multiple browsers and devices",
      "Created reusable UI components library, increasing development efficiency"
    ]
  }
];

/**
 * Brutalist Experience component replacing WorkExperience.tsx.
 * Large text, heavy separators, and clean content blocks.
 */
const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Experience" className="bg-white border-b-8 border-black p-4">
      <div className="w-full max-w-6xl h-full flex flex-col md:flex-row gap-0 border-8 border-black">
        
        {/* Left Sidebar */}
        <div className="md:w-1/4 bg-black p-8 flex items-end md:items-center justify-center md:border-r-8 border-black">
          <Typography variant="serif" size="giant" color="contrast" className="-rotate-90 hidden md:block whitespace-nowrap">
            WORK EXP.
          </Typography>
          <Typography variant="serif" size="xl" color="contrast" className="md:hidden uppercase font-black">
            Work Experience
          </Typography>
        </div>

        {/* Content Area - Scrollable internally if needed but following Scroll Snap */}
        <div className="md:w-3/4 bg-white p-6 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Year Badge */}
                <div className="inline-block bg-black text-white px-4 py-1 mb-4 font-brutalist-pixel text-lg font-bold uppercase">
                  {exp.period}
                </div>
                
                {/* Company & Role */}
                <Typography variant="serif" size="xl" className="uppercase font-black leading-none mb-2">
                  {exp.company}
                </Typography>
                <Typography variant="pixel" size="lg" className="italic font-bold text-gray-700 mb-6 uppercase tracking-wider">
                  {exp.role}
                </Typography>

                {/* Points */}
                <ul className="space-y-4 mb-8">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-4">
                      <span className="text-2xl leading-none">■</span>
                      <p className="font-brutalist-pixel text-xl leading-tight text-black">{point}</p>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="border-2 border-black px-2 py-0.5 font-brutalist-pixel text-sm uppercase font-bold hover:bg-black hover:text-white transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {idx !== EXPERIENCES.length - 1 && (
                  <div className="mt-16 border-b-4 border-dashed border-black/30 w-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
