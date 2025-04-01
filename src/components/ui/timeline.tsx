"use client";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// 添加行動裝置檢測 hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 初始檢測
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint 通常是 768px
    };
    
    // 頁面加載時檢測
    checkIfMobile();
    
    // 添加 resize 事件監聽器
    window.addEventListener('resize', checkIfMobile);
    
    // 清理事件監聽器
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

export const Timeline = ({ 
  data,
  title = "Work Experience",
  subtitle = "My professional software development journey" 
}: { 
  data: TimelineEntry[],
  title?: string,
  subtitle?: string 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const isMobile = useIsMobile();
  
  // IntersectionObserver 實現簡單的可見性檢測
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
      
      // 使用 IntersectionObserver 來檢測元件是否可見
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.1, // 10% 的元件可見時觸發
        }
      );
      
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);

  return (
    <div
      className="w-full bg-gray-100 font-sans md:px-10 py-16"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="px-4 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-4xl mb-4 text-gray-800 max-w-4xl font-bold">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-base max-w-sm">
            {subtitle}
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-24 md:gap-4 lg:gap-8"
            >
              <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-1/3">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-blue-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 md:pr-4 w-full md:w-2/3 max-w-4xl">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-500">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-300 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <div 
              className={`absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                height: isVisible ? '100%' : '0%',
                transition: 'height 1.5s ease-in-out, opacity 1s'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 