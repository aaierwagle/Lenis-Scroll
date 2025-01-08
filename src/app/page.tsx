"use client"
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // easing effect
      smoothWheel: true, // enable smooth scroll with the mouse wheel
      smoothTouch: true, // enable smooth scroll with touch devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='v-[200vh]'>
      <h1>Smooth Scrolling Page</h1>
      <p>This page uses Lenis for smooth scrolling!</p>
      <div style={{ height: '2000px' }}>
        <p>Scroll down to see the effect.</p>
      </div>
    </div>
  );
};

export default Page;
