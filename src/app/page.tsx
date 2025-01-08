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
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-semibold text-center mb-4">Smooth Scrolling Page</h1>
      <p className="text-lg text-center mb-8">This page uses Lenis for smooth scrolling!</p>
      <div style={{ height: '2000px' }} className="flex flex-col items-center justify-center">
        <p className="text-xl text-center text-gray-600">Scroll down to see the effect.</p>
      </div>
    </div>
  );
};

export default Page;
