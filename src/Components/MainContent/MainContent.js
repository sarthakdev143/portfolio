import React, { useRef, useEffect } from 'react';
import useLocomotiveScroll from './useLocomotiveScroll';
import { gsap } from 'gsap';
import './MainContent.css';
import Landing from './SubComponents/Landing/Landing'
import About from './SubComponents/About/About';

const MainContent = () => {
  const containerRef = useRef(null);
  const nameRowRef = useRef(null);
  const scrollInstance = useLocomotiveScroll(containerRef);

  useEffect(() => {
    if (!scrollInstance || !nameRowRef.current) return;

    let lastScrollY = 0;

    const onScroll = ({ scroll }) => {
      const currentScrollY = scroll.y;
      const direction = currentScrollY > lastScrollY ? 1 : -1;
      lastScrollY = currentScrollY;

      gsap.to(nameRowRef.current, {
        marginLeft: direction * 10 + '%',
        duration: 0.5, // Adding a duration for a smoother transition
        ease: 'power2.out', // Adding easing for a smoother animation
      });
    };

    scrollInstance.on('scroll', onScroll);

    return () => {
      scrollInstance.off('scroll', onScroll);
    };
  }, [scrollInstance]);

  return (
    <main id="container" ref={containerRef} data-scroll-container>
      <div id='wrapper' data-scroll-section>
        <Landing />
        <About />
        <div id='bottom-space'></div>
      </div>
    </main>
  );
};

export default MainContent;
