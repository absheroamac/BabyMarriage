"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".event-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-md mx-auto flex flex-col gap-8">
      
      {/* Day 1 - Nikah */}
      <div className="event-card glass p-8 rounded-3xl flex flex-col gap-6 text-center border border-accent/20">
        <h3 className="serif text-2xl tracking-widest uppercase font-medium text-accent">
          Day 1 — Nikah
        </h3>
        <div className="flex flex-col gap-3 sans text-sm opacity-80 tracking-wide">
          <p>Saturday, April 18, 2026</p>
          <p>11:00 AM</p>
          <p className="text-xs uppercase tracking-[0.2em] mt-2 opacity-60">
            30 Shawwal 1447
          </p>
        </div>
        <a 
          href="https://maps.app.goo.gl/P4m1Y3Y2W9R2Y2W9R" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex glass mx-auto mt-2 px-6 py-3 rounded-full text-foreground hover:bg-accent hover:text-white transition-all items-center gap-2 border border-accent/30 text-xs"
        >
          <MapPin size={14} />
          <span className="serif tracking-widest font-medium">VIEW LOCATION</span>
        </a>
      </div>

      {/* Day 2 - Reception (Placeholder) */}
      <div className="event-card glass p-8 rounded-3xl flex flex-col gap-6 text-center border border-accent/20 opacity-70">
        <h3 className="serif text-2xl tracking-widest uppercase font-medium text-accent">
          Day 2 — Reception
        </h3>
        <div className="flex flex-col gap-3 sans text-sm opacity-80 tracking-wide">
          <p>Date: (To be announced)</p>
          <p>Time: (To be announced)</p>
        </div>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex glass mx-auto mt-2 px-6 py-3 rounded-full text-foreground hover:bg-accent hover:text-white transition-all items-center gap-2 border border-accent/30 text-xs"
        >
          <MapPin size={14} />
          <span className="serif tracking-widest font-medium">VIEW LOCATION</span>
        </a>
      </div>

    </section>
  );
}
