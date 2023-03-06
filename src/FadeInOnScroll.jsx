import React, { useState, useEffect, useRef } from 'react';

function FadeInOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;

      if (element.offsetTop + element.offsetHeight < scrollPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default FadeInOnScroll;
