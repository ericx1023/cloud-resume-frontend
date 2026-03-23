import React from 'react';
import SectionWrapper from './SectionWrapper';
import Typography from './Typography';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  tech: string[];
  points: string[];
}

const EDUCATIONS: EducationItem[] = [
  {
    year: "2014",
    institution: "PC School Taiwan",
    degree: "Java Programming & Android Development",
    tech: ["Java", "OOP", "Android", "Mobile Development", "UI Design"],
    points: [
      "Built several Android applications as part of coursework",
      "Learned fundamental programming concepts and mobile development principles"
    ]
  },
  {
    year: "2005 - 2006",
    institution: "University of Kent, Canterbury, UK",
    degree: "MSc. Group Processing and Intergroup Relations",
    tech: ["Social Psychology", "Group Dynamics", "Research Methods", "Statistics"],
    points: [
      "Conducted research on intergroup relations and social identity theory",
      "Developed skills in quantitative and qualitative research methods"
    ]
  },
  {
    year: "1998 - 2003",
    institution: "Chun-Yuan Christian University",
    degree: "Bachelor of Psychology",
    tech: ["General Psychology", "Cognitive", "Experimental", "Clinical"],
    points: [
      "Participated in various psychological research projects",
      "Developed a strong foundation in understanding human behavior and cognition"
    ]
  }
];

/**
 * Brutalist Education component replacing Education.tsx.
 * Minimalist grid with heavy borders and high-impact typography.
 */
const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education" className="bg-white border-b-8 border-black p-4">
      <div className="w-full max-w-6xl h-full flex flex-col gap-0 border-8 border-black">
        
        {/* Header Ribbon */}
        <div className="bg-black p-6 md:p-8 flex items-center justify-between border-b-8 border-black">
          <Typography variant="serif" size="xl" color="contrast" className="uppercase font-black italic">
            Academic Background
          </Typography>
          <div className="hidden md:block">
            <Typography variant="pixel" size="md" color="contrast" className="opacity-50 tracking-[0.5em]">
              HISTORY // 1998-2014
            </Typography>
          </div>
        </div>

        {/* Education Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 divide-y-8 md:divide-y-0 md:divide-x-8 divide-black bg-white">
          {EDUCATIONS.map((edu, idx) => (
            <div key={idx} className="p-8 md:p-10 flex flex-col h-full hover:bg-red-600 group transition-all duration-300">
              <div className="mb-8">
                <Typography variant="pixel" size="xl" className="font-black mb-2 group-hover:text-white">
                  [{edu.year}]
                </Typography>
                <Typography variant="serif" size="lg" className="uppercase font-black leading-tight group-hover:text-white">
                  {edu.institution}
                </Typography>
              </div>

              <div className="flex-grow mb-8">
                <Typography variant="pixel" size="md" className="italic font-bold mb-6 group-hover:text-white underline underline-offset-4">
                  {edu.degree}
                </Typography>
                <ul className="space-y-4">
                  {edu.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex gap-2">
                      <span className="group-hover:text-white">→</span>
                      <p className="font-brutalist-pixel text-lg leading-tight group-hover:text-white">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t-4 border-black group-hover:border-white">
                <div className="flex flex-wrap gap-2">
                  {edu.tech.map((t, tIdx) => (
                    <span key={tIdx} className="bg-black text-white px-2 py-0.5 font-brutalist-pixel text-xs uppercase font-bold group-hover:bg-white group-hover:text-red-600 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
