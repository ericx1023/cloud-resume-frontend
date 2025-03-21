import { useTransform, useScroll } from 'framer-motion';

export const useScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  // Section 1: Header/Hero
  const section1Opacity = useTransform(scrollYProgress, [0, 0.13], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.13], [0, -50]);

  // Section 2: Professional Summary & Technical Skills
  const section2Opacity = useTransform(scrollYProgress, [0.13, 0.28, 0.28, 0.4], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.13, 0.28], [50, 0]);

  // Section 3: Work Experience
  const section3Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.55, 0.65], [0, 1, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.4, 0.55], [50, 0]);
  
  // Section 4: Education
  const section4Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.75, 0.82], [0, 1, 1, 0]);
  const section4Y = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

  // Section 5: Projects
  const section5Opacity = useTransform(scrollYProgress, [0.82, 0.9, 0.9, 0.95], [0, 1, 1, 0]);
  const section5Y = useTransform(scrollYProgress, [0.82, 0.9], [50, 0]);

  // Section 6: Cloud Resume Stack
  const section6Opacity = useTransform(scrollYProgress, [0.95, 1.0], [0, 1]);
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