import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  visitorCount: number | null;
  onVisitorClick: () => void;
};

const VisitorCounter: React.FC<Props> = ({ visitorCount, onVisitorClick }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-blue-50 p-4 rounded-lg mt-8 hover:bg-blue-100 transition-colors cursor-pointer"
      onClick={onVisitorClick}
      style={{ cursor: "pointer" }}
    >
      <p className="text-center text-gray-600 font-merriweather">
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
            </span> visitor of the resume
          </>
        )}
      </p>
    </motion.section>
  );
};

export default VisitorCounter; 