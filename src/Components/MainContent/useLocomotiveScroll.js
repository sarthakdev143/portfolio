// useLocomotiveScroll.js
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocomotiveScroll = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [containerRef]);
};

export default useLocomotiveScroll;