import React, { useState, useEffect, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Show button when page is scrolled down with throttling for better performance
  const toggleVisibility = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setScrollProgress(scrollPercent);
    
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Scroll to top smoothly with enhanced animation
  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    
    // Only add event listeners on client-side
    if (typeof window === 'undefined') return;
    
    // Throttle scroll events for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Keyboard shortcut for scroll to top (Ctrl/Cmd + Home)
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Home') {
        event.preventDefault();
        scrollToTop();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleVisibility]);

  return (
    <>
      {isClient && isVisible && (
        <div className="fixed bottom-8 right-8 z-50 group">
          {/* Progress Ring */}
          <div className="relative w-14 h-14">
            <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="2"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-indigo-600 dark:text-indigo-400 transition-all duration-300"
                strokeWidth="2"
                strokeDasharray={`${scrollProgress}, 100`}
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            
            {/* Scroll Button */}
            <button
              onClick={scrollToTop}
              className="absolute inset-0 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full shadow-lg dark:shadow-gray-800/50 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group-hover:shadow-xl"
              aria-label="Scroll to top"
              title={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
            >
              <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Scroll to top ({Math.round(scrollProgress)}%)
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
