"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function WelcomeSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".welcome-reveal",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={contentRef} 
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 gap-16 relative"
    >
      <div className="welcome-reveal flex flex-col items-center gap-4">
        <p className="text-2xl sm:text-3xl text-accent pb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
        <span className="sans text-xs tracking-[0.2em] opacity-60 uppercase max-w-sm leading-loose">
          In the name of Allah, the Most Gracious, the Most Merciful
        </span>
      </div>

      <div className="welcome-reveal flex flex-col items-center gap-6 my-10">
        <h1 className="serif text-5xl sm:text-7xl font-light tracking-wide text-foreground">
          ADHILA
        </h1>
        <div className="serif text-2xl text-accent font-light italic">&</div>
        <h1 className="serif text-5xl sm:text-7xl font-light tracking-wide text-foreground">
          SHABEEB
        </h1>
      </div>

      <div className="welcome-reveal">
        <p className="sans text-sm tracking-[0.3em] uppercase opacity-80 text-accent">
          Nikah Celebration
        </p>
      </div>
    </section>
  );
}
