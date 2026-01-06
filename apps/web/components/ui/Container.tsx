import React from 'react';
import { SectionProps } from '../../types'

export const Container: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
};