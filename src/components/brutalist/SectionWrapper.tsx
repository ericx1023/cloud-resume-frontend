import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * SectionWrapper for Brutalist Portfolio.
 * Implements 100vh height and Scroll Snap alignment.
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      aria-label={title}
      className={`h-auto md:h-screen w-full flex flex-col justify-center items-center overflow-hidden snap-start ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
