"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Lock scrolling on mount
    document.body.style.overflow = "hidden";
    
    // Register Plugins
    import("gsap/ScrollToPlugin").then((m) => {
      gsap.registerPlugin(m.ScrollToPlugin, ScrollTrigger);
    });

    // Make sure viewport is strictly at top initially
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const startAnimation = () => {
    if (!videoRef.current || hasStarted) return;
    
    setHasStarted(true);
    
    // Unlock scrolling
    document.body.style.overflow = "auto";
    
    // Play video
    videoRef.current.play();

    // Create a sequenced timeline
    const tl = gsap.timeline({
      delay: 0.5 // Let the video play briefly before beginning the sequence
    });

    // 1. Reduce opacity faster
    tl.to(videoRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })
    // 2. Move to the next section when the fade is about done
    .to(window, {
      scrollTo: { y: window.innerHeight, autoKill: false },
      duration: 2.2, // Slower, elegant scroll
      ease: "power2.inOut",
      onComplete: () => {
        if (containerRef.current) {
          // Hide to prevent blank scrollable space at the top
          containerRef.current.style.display = "none";
          // Maintain physical position since the 100vh element was removed
          window.scrollTo(0, 0);
          
          // Force GSAP to recalculate all DOM triggers since page height changed by 100vh
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        }
      }
    }, "-=0.5"); // Start scrolling 0.5s before the fade strictly completes
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-background flex items-center justify-center cursor-pointer overflow-hidden z-20"
      onClick={startAnimation}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop
      />
    </div>
  );
}
