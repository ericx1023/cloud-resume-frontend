import React from 'react';
import SectionWrapper from './SectionWrapper';
import Typography from './Typography';

/**
 * Brutalist TechStack component replacing CloudResumeStack.tsx.
 * Displays site architecture using a mix of tables and block layouts.
 */
const TechStack: React.FC = () => {
  return (
    <SectionWrapper id="tech-stack" title="Tech Stack" className="bg-white border-b-8 border-black p-4">
      <div className="w-full max-w-6xl h-full flex flex-col border-8 border-black bg-white overflow-y-auto">
        
        {/* Title Bar */}
        <div className="bg-black p-6 md:p-8 border-b-8 border-black text-center">
          <Typography variant="serif" size="xl" color="contrast" className="uppercase font-black italic tracking-widest">
            Site_Architecture // Ver_1.0
          </Typography>
        </div>

        <div className="flex-grow p-6 md:p-12 space-y-12">
          
          {/* AWS Services Block */}
          <div className="border-4 border-black p-8 bg-gray-100 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
            <Typography variant="serif" size="lg" className="mb-6 border-b-4 border-black pb-2 uppercase font-black">
              AWS Cloud Infrastructure
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                { name: "S3", desc: "React Website Hosting" },
                { name: "CloudFront", desc: "HTTPS Security & CDN" },
                { name: "Route 53", desc: "Custom DNS Domain" },
                { name: "DynamoDB", desc: "Visitor Counter Database" },
                { name: "API Gateway", desc: "Serverless REST API" },
                { name: "Lambda", desc: "Python Backend Functions" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b-2 border-black/10 py-2">
                  <span className="bg-black text-white px-2 py-0.5 font-brutalist-pixel font-bold min-w-[100px] text-center">{item.name}</span>
                  <Typography variant="pixel" size="md" className="font-bold">{item.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend Block */}
            <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
              <Typography variant="serif" size="lg" className="mb-6 border-b-4 border-black pb-2 uppercase font-black">
                Frontend Stack
              </Typography>
              <ul className="space-y-4">
                {["React.js (TypeScript)", "Tailwind CSS", "CSS Scroll Snap", "Lucide React Icons"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-2xl font-black">■</span>
                    <Typography variant="pixel" size="md" className="font-bold uppercase tracking-tight">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend & DevOps Block */}
            <div className="border-4 border-black p-8 bg-black text-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
              <Typography variant="serif" size="lg" color="contrast" className="mb-6 border-b-4 border-white/30 pb-2 uppercase font-black">
                DevOps & Backend
              </Typography>
              <ul className="space-y-4">
                {["Python (Boto3)", "AWS SAM (IaC)", "GitHub Actions (CI/CD)", "Husky Automation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-2xl text-white">■</span>
                    <Typography variant="pixel" size="md" color="contrast" className="font-bold uppercase tracking-tight">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* External Links / Documentation */}
          <div className="pt-8 border-t-8 border-black flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="https://github.com/ericx1023/cloud-resume-frontend" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 border-4 border-black hover:bg-white hover:text-black transition-all font-brutalist-serif font-black uppercase text-xl italic shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              GITHUB_REPO
            </a>
            <a href="https://psychevalley.org" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 border-4 border-black hover:bg-black hover:text-white transition-all font-brutalist-serif font-black uppercase text-xl italic shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              BLOG_WEBSITE
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
