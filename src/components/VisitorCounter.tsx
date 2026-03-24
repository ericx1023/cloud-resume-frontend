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
    <div
      className={`inline-block border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onVisitorClick}
    >
      <p className="text-center font-brutalist-pixel text-black text-xl uppercase tracking-tighter">
        {visitorCount === null ? (
          'LOADING_VISITORS...'
        ) : (
          <>
            VISITOR_NO. <span className="font-black bg-black text-white px-2">
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
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default VisitorCounter; 