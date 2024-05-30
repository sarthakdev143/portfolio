import React, { createContext, useContext, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <ScrollContext.Provider value={scrollRef}>
            <div data-scroll-container ref={scrollRef}>
                {children}
            </div>
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);