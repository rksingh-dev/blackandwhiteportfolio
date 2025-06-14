'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'scale-in' | 'clip-reveal';
}

export function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '', 
  animation = 'fade-up' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade-up': 'animate-fade-in-up',
    'fade-left': 'animate-fade-in-left',
    'scale-in': 'animate-scale-in',
    'clip-reveal': 'animate-clip-reveal'
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{
        transform: animation === 'fade-up' ? 'translateY(20px)' : 
                  animation === 'fade-left' ? 'translateX(-20px)' : 
                  animation === 'scale-in' ? 'scale(0.95)' : 'none',
        clipPath: animation === 'clip-reveal' ? 'inset(0 100% 0 0)' : 'none'
      }}
    >
      {children}
    </div>
  );
}