import React, { useEffect, useState } from 'react';

type Props = {
  visitorCount: number | null;
  onVisitorClick: () => void;
};

const VisitorCounter: React.FC<Props> = ({ visitorCount, onVisitorClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // 使用簡單的 setTimeout 來模擬進入視圖的動畫效果
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section
      className={`bg-blue-50 p-4 rounded-lg mt-8 hover:bg-blue-100 transition-all duration-800 font-montserrat cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      onClick={onVisitorClick}
      style={{ 
        cursor: "pointer",
        transition: "opacity 0.8s ease, transform 0.8s ease"
      }}
    >
      <p className="text-center text-gray-600">
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
    </section>
  );
};

export default VisitorCounter; 