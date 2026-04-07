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
          href="https://www.google.com/maps/place/XC6Q%2BHV6+Liya+Auditorium,+Changaleeri+Rd,+Kerala+678762/@10.9614107,76.4396501,17z/data=!4m6!3m5!1s0x3ba7d5a7b0c9234b:0x20aa619665b63768!8m2!3d10.9614107!4d76.4396501!16s%2Fg%2F11fm7kxjmb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex glass mx-auto mt-2 px-6 py-3 rounded-full text-foreground hover:bg-accent hover:text-white transition-all items-center gap-2 border border-accent/30 text-xs"
        >
          <MapPin size={14} />
          <span className="serif tracking-widest font-medium">VIEW LOCATION</span>
        </a>
      </div>

      {/* Day 2 - Reception */}
      <div className="event-card glass p-8 rounded-3xl flex flex-col gap-6 text-center border border-accent/20">
        <h3 className="serif text-2xl tracking-widest uppercase font-medium text-accent">
          Day 2 — Reception
        </h3>
        <div className="flex flex-col gap-3 sans text-sm opacity-80 tracking-wide">
          <p>Sunday, April 19, 2026</p>
          <p>11:00 AM</p>
        </div>
        <a 
          href="https://www.google.com/maps/place/Karimbalayil+Convention+Centre,+Karuvampadi,+Ponnamkode+Karakurissi+Road,+Vazhampuram,+Kerala+678595/@10.9327801,76.5013465,15z/data=!4m6!3m5!1s0x3ba87901b7dad0ef:0x30dbafc8226298c1!8m2!3d10.9327801!4d76.5013465!16s%2Fg%2F11y1cmmq7j" 
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
