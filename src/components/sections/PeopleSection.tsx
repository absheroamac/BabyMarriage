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
        stagger: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );

    // Parallax for Top Left Flower
    gsap.to(".flower-parallax-1", {
      y: 80, // subtle downward drift in px
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Parallax for Bottom Right Flower
    gsap.to(".flower-parallax-2", {
      y: -80, // subtle upward drift in px
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-28 md:py-48 flex flex-col justify-center min-h-[100vh] w-full overflow-hidden bg-background mt-20"
      style={{ paddingTop: '100px' }}
    >

      {/* Top Left Flower */}
      <img
        src="/flowers/flower1.png"
        alt="Decorative flower"
        className="flower-parallax-1 w-[65%] h-auto object-contain pointer-events-none opacity-90 self-start"
        style={{
          top: 0,
          left: 0,
          width: 'min(400px, 55vw)',
          height: 'auto',
          objectFit: 'contain',
          pointerEvents: 'none',
          opacity: 0.9,
          zIndex: 0
        }}
      />



      <div className="w-full max-w-5xl mx-auto relative z-10 px-6 sm:px-12 flex flex-col" style={{ gap: '6rem' }}>

        {/* Bride Card - Left Aligned */}
        <div className="person-card w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <h2 className="serif text-[#5c4033] font-light tracking-wide uppercase" style={{ fontSize: 'min(4.5rem, 13vw)', lineHeight: 1, marginBottom: '2rem' }}>
            ADHILA
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p className="sans text-[#2a2a2a]" style={{ fontSize: 'min(1.25rem, 4vw)', fontWeight: 500 }}>
              Grand daughter of
            </p>
            <p className="sans text-[#2a2a2a]" style={{ fontSize: 'min(1.1rem, 3.5vw)', opacity: 0.85, lineHeight: 1.6, fontWeight: 300 }}>
              Karunakurussi Hamsa & Pothiiyil Fathima<br />
              Kolakkadan Mammed & Pallath Zainaba
            </p>
          </div>
        </div>

        {/* Groom Card - Right Aligned */}
        <div className="person-card w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
          <h2 className="serif text-[#5c4033] font-light tracking-wide uppercase" style={{ fontSize: 'min(4.5rem, 13vw)', lineHeight: 1, marginBottom: '2rem' }}>
            SHABEEB
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
            <p className="sans text-[#2a2a2a]" style={{ fontSize: 'min(1.25rem, 4vw)', fontWeight: 500 }}>
              Son of
            </p>
            <p className="sans text-[#2a2a2a]" style={{ fontSize: 'min(1.1rem, 3.5vw)', opacity: 0.85, lineHeight: 1.6, fontWeight: 300 }}>
              ( Late ) Sharafudheen & Asmath<br />
              Kallivalappil ( H ), Kottiyode, Chirakkalpadi
            </p>
          </div>
        </div>



      </div>

      {/* Bottom Right Flower */}
      <img
        src="/flowers/flower2.png"
        alt="Decorative flower"
        className="flower-parallax-2"
        style={{
          bottom: 0,
          right: 0,
          alignItems: 'flex-end',
          width: 'min(400px, 55vw)',
          height: 'auto',
          objectFit: 'contain',
          pointerEvents: 'none',
          opacity: 0.9,
          zIndex: 0,
          marginLeft: 'auto',
          marginRight: 0,
        }}
      />
    </section>
  );
}
