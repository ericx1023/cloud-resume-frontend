import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import { getPersonalInfo } from '../config';

type Props = {
  visitorCount: number | null;
  onVisitorClick: () => void;
};

const Header: React.FC<Props> = ({ visitorCount, onVisitorClick }) => {
  const personalInfo = getPersonalInfo();
  
  return (
    <div
      className="min-h-screen flex items-center justify-center w-screen bg-gradient-to-b from-slate-800 via-slate-700 to-transparent text-white font-montserrat"
    >
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">{personalInfo.name}</h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-montserrat">{personalInfo.title}</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-montserrat">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-gray-200">{personalInfo.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Github size={16} />
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">GitHub</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} />
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">LinkedIn</a>
          </div>
        </div>
        
        <VisitorCounter visitorCount={visitorCount} onVisitorClick={onVisitorClick} />
      </div>
    </div>
  );
};

export default Header; 