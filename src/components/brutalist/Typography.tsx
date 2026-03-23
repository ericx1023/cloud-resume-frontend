import React from 'react';

interface TypographyProps {
  variant: 'serif' | 'pixel';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'giant';
  color?: 'primary' | 'accent' | 'contrast';
  className?: string;
  children: React.ReactNode;
}

/**
 * Typography component for Brutalist Portfolio.
 * Implements the design contract for vintage serif and pixelated monospace fonts.
 */
const Typography: React.FC<TypographyProps> = ({
  variant,
  size = 'md',
  color = 'primary',
  className = '',
  children,
}) => {
  const baseClasses = variant === 'serif' ? 'font-brutalist-serif' : 'font-brutalist-pixel';
  
  const sizeMap = {
    xs: 'text-xs md:text-sm',
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-xl md:text-2xl',
    xl: 'text-3xl md:text-5xl',
    giant: 'text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none',
  };

  const colorMap = {
    primary: 'text-black',
    accent: 'text-red-600',
    contrast: 'text-white',
  };

  const combinedClasses = `${baseClasses} ${sizeMap[size]} ${colorMap[color]} ${className}`.trim();

  return <div className={combinedClasses}>{children}</div>;
};

export default Typography;
