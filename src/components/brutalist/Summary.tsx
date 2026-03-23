import React from 'react';
import SectionWrapper from './SectionWrapper';
import Typography from './Typography';

/**
 * Brutalist Summary component replacing ProfessionalSummary.tsx.
 * Highlights expertise and technical skills with heavy-handed design.
 */
const Summary: React.FC = () => {
  return (
    <SectionWrapper id="summary" title="Summary" className="bg-white px-4 border-b-8 border-black">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-0 border-8 border-black bg-black shadow-[16px_16px_0px_0px_rgba(255,0,0,1)]">
        
        {/* Professional Summary Section */}
        <div className="md:col-span-8 bg-white p-8 md:p-12 border-b-8 md:border-b-0 md:border-r-8 border-black">
          <Typography variant="serif" size="xl" className="mb-8 underline decoration-8 decoration-red-600 underline-offset-8 uppercase font-black italic">
            Professional Summary
          </Typography>
          <div className="space-y-6">
            <p className="font-brutalist-pixel text-xl md:text-2xl leading-relaxed text-black">
              Frontend Engineer with <span className="bg-black text-white px-2 italic">10+ years of experience</span> architecting scalable web applications and driving technical excellence. 
            </p>
            <p className="font-brutalist-pixel text-xl md:text-2xl leading-relaxed text-black">
              Expertise in <span className="border-2 border-black px-1 font-bold">React</span>, <span className="border-2 border-black px-1 font-bold">Angular</span>, and modern frontend frameworks, with a proven track record implementing frontend architectures and <span className="border-2 border-black px-1 font-bold">Next.js</span>. 
            </p>
            <p className="font-brutalist-pixel text-xl md:text-2xl leading-relaxed text-black italic">
              Recognized for technical mentorship, establishing engineering best practices, and successfully migrating legacy systems to modern stacks while maintaining production reliability.
            </p>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="md:col-span-4 bg-yellow-300 p-8 flex flex-col justify-start">
          <Typography variant="serif" size="lg" className="mb-8 border-b-4 border-black pb-2 uppercase font-black">
            Technical Skills
          </Typography>
          
          <div className="space-y-8">
            <div>
              <Typography variant="pixel" size="md" className="font-black uppercase bg-black text-white inline-block px-2 mb-2">Frontend</Typography>
              <Typography variant="pixel" size="md">Angular, React, TypeScript, Rx.js, Redux, Tailwind CSS</Typography>
            </div>
            
            <div>
              <Typography variant="pixel" size="md" className="font-black uppercase bg-black text-white inline-block px-2 mb-2">Backend</Typography>
              <Typography variant="pixel" size="md">Node.js, Python, Next.js, GraphQL, REST APIs</Typography>
            </div>
            
            <div>
              <Typography variant="pixel" size="md" className="font-black uppercase bg-black text-white inline-block px-2 mb-2">Tools</Typography>
              <Typography variant="pixel" size="md">Git, Docker, PostgreSQL, Supabase, Firebase, Web Components</Typography>
            </div>

            <div className="pt-4 border-t-2 border-black/20">
              <Typography variant="pixel" size="xs" className="uppercase opacity-70">Legacy Expertise: Backbone.js, Stage.js, jQuery, SVN</Typography>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Summary;
