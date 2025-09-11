import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out';
    const durationClass = `duration-${Math.round(duration * 1000)}`;
    
    if (!isVisible) {
      const hiddenClass = {
        up: 'opacity-0 translate-y-8',
        down: 'opacity-0 -translate-y-8',
        left: 'opacity-0 -translate-x-8',
        right: 'opacity-0 translate-x-8',
        fade: 'opacity-0'
      }[direction];
      
      return `${baseClass} ${durationClass} ${hiddenClass}`;
    }
    
    return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
