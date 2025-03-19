import { useTransform, useScroll } from 'framer-motion';

export const useScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  // Section 1: Header/Hero
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: Professional Summary & Technical Skills
  const section2Opacity = useTransform(scrollYProgress, [0.15, 0.35, 0.35, 0.5], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.15, 0.35], [50, 0]);

  // Section 3: Work Experience & Education
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.75, 0.75, 0.85], [0, 1, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.5, 0.75], [50, 0]);

  // Section 4: Projects & Cloud Resume Stack
  const section4Opacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const section4Y = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  return {
    scrollYProgress,
    section1Opacity,
    section1Y,
    section2Opacity,
    section2Y,
    section3Opacity,
    section3Y,
    section4Opacity,
    section4Y
  };
}; 