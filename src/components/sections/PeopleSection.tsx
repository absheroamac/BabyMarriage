"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function PeopleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".person-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 flex flex-col items-center gap-20 max-w-2xl mx-auto">
      
      {/* Bride Card */}
      <div className="person-card flex flex-col items-center text-center gap-6 w-full">
        <h2 className="serif text-4xl sm:text-5xl text-foreground font-light mb-2">
          👰 Adhila
        </h2>
        <div className="flex flex-col gap-2">
          <p className="sans text-xs tracking-[0.2em] uppercase text-accent font-medium mb-1">
            Granddaughter of:
          </p>
          <p className="sans text-sm opacity-80 leading-relaxed">
            Karunakurussi Hamsa & Pothiyil Fathima<br />
            Kolakkadan Mammed & Pallath Zainaba
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="person-card w-12 h-px bg-accent/20" />

      {/* Groom Card */}
      <div className="person-card flex flex-col items-center text-center gap-6 w-full">
        <h2 className="serif text-4xl sm:text-5xl text-foreground font-light mb-2">
          🤵 Shabeeb
        </h2>
        <div className="flex flex-col gap-2">
          <p className="sans text-xs tracking-[0.2em] uppercase text-accent font-medium mb-1">
            Son of:
          </p>
          <p className="sans text-sm opacity-80 leading-relaxed">
            (Late) Sharafudheen & Asmath<br />
            Kallivalappil (H), Kottiyode, Chirakkalpadi
          </p>
        </div>
      </div>

    </section>
  );
}
