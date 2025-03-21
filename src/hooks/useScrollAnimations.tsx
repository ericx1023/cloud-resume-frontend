import { useTransform, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // 檢測是否為移動裝置
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初始檢查
    checkIfMobile();
    
    // 視窗大小變化時再次檢查
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Section 1: Header/Hero
  const section1Opacity = useTransform(scrollYProgress, [0, 0.13], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.13], [0, -50]);

  // Section 2: Professional Summary & Technical Skills
  // 在移動裝置上提前結束淡出效果
  const section2Opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0.13, 0.23, 0.23, 0.27] : [0.13, 0.25, 0.25, 0.30], 
    [0, 1, 1, 0]
  );
  const section2Y = useTransform(
    scrollYProgress, 
    isMobile ? [0.13, 0.23] : [0.13, 0.25], 
    [50, 0]
  );

  // Section 3: Work Experience
  // 在移動裝置上延遲開始淡入效果
  const section3Opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0.35, 0.55, 0.55, 0.65] : [0.32, 0.55, 0.55, 0.65], 
    [0, 1, 1, 0]
  );
  const section3Y = useTransform(
    scrollYProgress, 
    isMobile ? [0.35, 0.55] : [0.32, 0.55], 
    [50, 0]
  );
  
  // Section 4: Education
  const section4Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.75, 0.82], [0, 1, 1, 0]);
  const section4Y = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

  // Section 5: Projects - 根據裝置類型調整淡出時機
  const section5Opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0.82, 0.9, 0.9, 0.98] : [0.82, 0.9, 0.9, 0.95], 
    [0, 1, 1, 0]
  );
  const section5Y = useTransform(scrollYProgress, [0.82, 0.9], [50, 0]);

  // Section 6: Cloud Resume Stack - 根據裝置類型調整淡入時機
  const section6Opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0.98, 1.0] : [0.95, 1.0], 
    [0, 1]
  );
  const section6Y = useTransform(scrollYProgress, [0.95, 1.0], [50, 0]);

  return {
    scrollYProgress,
    section1Opacity,
    section1Y,
    section2Opacity,
    section2Y,
    section3Opacity,
    section3Y,
    section4Opacity,
    section4Y,
    section5Opacity,
    section5Y,
    section6Opacity,
    section6Y
  };
}; 