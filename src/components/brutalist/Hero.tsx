import React from 'react';
import { Github, Mail, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Typography from './Typography';
import VisitorCounter from '../VisitorCounter';

interface HeroProps {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    socialLinks: {
      github: string;
      linkedin: string;
    };
  };
  visitorCount: number | null;
  onVisitorClick: () => void;
}

/**
 * Brutalist Hero component replacing Header.tsx.
 * Features heavy borders, grayscale VisitorCounter, and experimental typography.
 */
const Hero: React.FC<HeroProps> = ({ personalInfo, visitorCount, onVisitorClick }) => {
  return (
    <SectionWrapper id="hero" title="Home" className="grid-bg relative px-4 text-center border-b-8 border-black">
      {/* Aesthetic Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none overflow-hidden">
        <Typography variant="serif" size="giant" className="whitespace-nowrap -rotate-6">
          {personalInfo.name.toUpperCase()} • {personalInfo.name.toUpperCase()}
        </Typography>
      </div>

      <div className="z-10 flex flex-col items-center justify-center space-y-8 w-full max-w-5xl">
        {/* Name with Brutalist Frame */}
        <div className="border-8 border-black p-6  bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-200 cursor-default">
          <Typography variant="serif" size="giant" className="glitch-text">
            {personalInfo.name}
          </Typography>
        </div>

        {/* Title / Role */}
        <div className="bg-black px-8 py-3 transform skew-x-[-10deg]">
          <Typography 
            variant="pixel" 
            size="xl" 
            color="contrast" 
            className="tracking-[0.2em] uppercase italic transform skew-x-[10deg]"
          >
            {personalInfo.title}
          </Typography>
        </div>

        {/* Contact Info & Socials - Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
          <div className="border-4 border-black p-4 bg-white hover:bg-gray-200 transition-colors">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={20} strokeWidth={3} />
              <Typography variant="pixel" size="md" className="font-bold uppercase">Location</Typography>
            </div>
            <Typography variant="pixel" size="sm">{personalInfo.location}</Typography>
          </div>

          <div className="border-4 border-black p-4 bg-white hover:bg-gray-200 transition-colors">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail size={20} strokeWidth={3} />
              <Typography variant="pixel" size="md" className="font-bold uppercase">Contact</Typography>
            </div>
            <Typography variant="pixel" size="sm" className="break-all">{personalInfo.email}</Typography>
            <Typography variant="pixel" size="sm">{personalInfo.phone}</Typography>
          </div>

          <div className="border-4 border-black p-4 bg-white hover:bg-gray-200 transition-colors">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Github size={20} strokeWidth={3} />
              <Typography variant="pixel" size="md" className="font-bold uppercase">Socials</Typography>
            </div>
            <div className="flex justify-center gap-4">
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Typography variant="pixel" size="sm" className="font-black">GITHUB</Typography>
              </a>
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Typography variant="pixel" size="sm" className="font-black">LINKEDIN</Typography>
              </a>
            </div>
          </div>
        </div>
        
        {/* Visitor Counter Integration */}
        <div className="mt-12">
          <VisitorCounter visitorCount={visitorCount} onVisitorClick={onVisitorClick} />
        </div>

        {/* Scroll Hint */}
        <div className="pt-8">
          <Typography variant="pixel" size="sm" className="animate-bounce font-black">
            ▼ [ KEEP SCROLLING ] ▼
          </Typography>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
