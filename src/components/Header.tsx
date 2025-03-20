import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import VisitorCounter from './VisitorCounter';

type Props = {
  section1Opacity: any;
  section1Y: any;
  visitorCount: number | null;
  onVisitorClick: () => void;
};

const Header: React.FC<Props> = ({ section1Opacity, section1Y, visitorCount, onVisitorClick }) => {
  return (
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">Sheng-Hao (Sheng) Wang</h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-montserrat">Software Engineering Manager</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-merriweather">
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
        
        <VisitorCounter visitorCount={visitorCount} onVisitorClick={onVisitorClick} />
      </div>
    </motion.div>
  );
};

export default Header; 