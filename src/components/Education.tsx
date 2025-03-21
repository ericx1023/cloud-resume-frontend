import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  section4Opacity: any;
  section4Y: any;
};

const Education: React.FC<Props> = ({ section4Opacity, section4Y }) => {
  return (
    <motion.div
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
      <div className="w-full max-w-4xl mx-auto px-4 absolute top-1/2 -translate-y-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-medium text-gray-800">PC School Taiwan</h3>
            <p className="text-gray-600">Java programming & Android Development</p>
            <p className="text-gray-600">Feb 2014 - Dec 2014</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-medium text-gray-800">University of Kent, Canterbury, UK</h3>
            <p className="text-gray-600">MSc. Group Processing and Intergroup Relations</p>
            <p className="text-gray-600">Aug 2005 - Aug 2006</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-medium text-gray-800">Chun-Yuan Christian University</h3>
            <p className="text-gray-600">Bachelor of Psychology</p>
            <p className="text-gray-600">Sep 1998 - Sep 2003</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education; 