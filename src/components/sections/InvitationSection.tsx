"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function InvitationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-3 w-full flex justify-center items-center"
    >
      <div
        className="w-full max-w-[500px] mx-auto flex flex-col items-center justify-between text-center px-10 py-20 sm:px-16 sm:py-24 drop-shadow-xl"
        style={{
          backgroundImage: "url('/paperBackground.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        {/* Top Block: Parents & Address */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2 text-foreground">
            <h3 className="serif text-[1.4rem] sm:text-[1.7rem] font-medium tracking-wide leading-tight">
              Mr & Mrs Said Muhammed<br className="hidden sm:block" /> & Ayshabi
            </h3>
          </div>
          <p className="sans text-sm sm:text-base opacity-80 tracking-widest leading-relaxed">
            Karunakurussi ( H )<br /> Changaleeri, Mannarkkad
          </p>
        </div>

        {/* Middle Block: Invitation Text */}
        <div
          className="sans text-[1.3rem] sm:text-2xl text-foreground font-semibold leading-[1] tracking-wide mb-8 sm:mb-6"
          style={{ marginTop: '60px' }}
        >
          Cordially Invite you to the<br />
          Nikah Ceremony of our<br />
          Beloved Daughter
        </div>

        {/* Bottom Block: Love Icon */}
        <div className="pt-2" style={{ marginTop: '25px' }}>
          <Image
            src="/LoveIcon.svg"
            alt="Love Icon"
            width={20}
            height={20}
            className="opacity-80"
          />
        </div>

      </div>
    </section>
  );
}
