"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ClosingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".closing-reveal",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 flex flex-col items-center gap-24 text-center">
      
      <div className="closing-reveal max-w-sm mx-auto">
        <p className="serif text-xl sm:text-2xl text-foreground font-light leading-relaxed italic">
          &quot;Your gracious presence and duas<br />
          will make this occasion more special.&quot;
        </p>
      </div>

      <div className="closing-reveal flex flex-col gap-3">
        <p className="sans text-[10px] tracking-widest uppercase opacity-40">Best compliments from</p>
        <p className="serif text-sm tracking-widest uppercase font-medium text-foreground">
          Arshad, Anshad & Relatives
        </p>
      </div>

    </section>
  );
}
