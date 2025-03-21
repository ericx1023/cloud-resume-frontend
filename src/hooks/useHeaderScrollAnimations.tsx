import { useTransform, useScroll } from 'framer-motion';

export const useHeaderScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  // Section 1: Header/Hero
  const section1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: Professional Summary & Technical Skills
  const section2Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.20, 0.25], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [50, 0, -50]);

  return {
    scrollYProgress,
    section1Opacity,
    section1Y,
    section2Opacity,
    section2Y
  };
}; 