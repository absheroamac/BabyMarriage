"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MapPin, ExternalLink } from "lucide-react";

export default function VenueSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".venue-reveal",
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
    <section ref={containerRef} className="py-20 px-6 max-w-lg mx-auto flex flex-col items-center gap-10 text-center">
      
      <div className="venue-reveal flex flex-col items-center gap-4">
        <MapPin size={32} strokeWidth={1} className="text-accent" />
        <h2 className="serif text-3xl text-foreground font-light tracking-wide">
          Venue
        </h2>
      </div>

      <div className="venue-reveal flex flex-col gap-2 sans text-sm opacity-80 leading-loose">
        <p><strong>Liya Auditorium</strong></p>
        <p>Changaleeri</p>
      </div>

      <div className="venue-reveal w-full">
        <div className="relative w-full h-[250px] sm:h-[350px] rounded-[30px] overflow-hidden glass border border-accent/20 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3268804066!2d76.43851537583626!3d10.957597989128087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d4e3f88031d3%3A0xe54972f7797e87ab!2sLiya%20Auditorium!5e0!3m2!1sen!2sin!4v1712217600000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-duration-700 pointer-events-none" 
            // disabled pointer events so they click the big exterior button instead on mobile
          />
        </div>

        <a 
          href="https://maps.app.goo.gl/P4m1Y3Y2W9R2Y2W9R" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex glass px-8 py-4 rounded-full text-foreground hover:bg-accent hover:text-white transition-all items-center gap-3 border border-accent/30"
        >
          <span className="serif text-sm tracking-widest font-medium">OPEN IN GOOGLE MAPS</span>
          <ExternalLink size={16} />
        </a>
      </div>

    </section>
  );
}
