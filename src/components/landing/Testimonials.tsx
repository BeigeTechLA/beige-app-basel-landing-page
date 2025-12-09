"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const TESTIMONIALS = [
  {
    quote: "Excellent service, timely production, and high-quality editing. They handled multiple locations with ease and kept everything organized and stress-free. The team went above and beyond to ensure every detail was captured perfectly.",
    author: "Daniel L",
    role: "Founder and CEO of Growth Glitch",
    active: true // Based on image (8).png
  },
  {
    quote: "Chris Bentley shares his excitement about working with Beige, praising the team for their professionalism, amazing shots, and smooth collaboration.",
    author: "Chris B",
    role: "Award Winning Dallas Real Estate Broker",
  },
  {
    quote: "From consultation to final output, Beige was professional, communicative and efficient. Delivered a high-quality video exactly as envisioned.",
    author: "Kevin F (Co-Founder)",
    role: "Off Season Athlete Marketing Company",
  },
  {
    quote: "Excellent service, timely production, and high-quality editing. They handled multiple locations with ease and kept everything organized and stress-free.",
    author: "Keana C",
    role: "Agency Representative",
  },
  {
    quote: "Despite a long shoot, the team's professionalism and smooth workflow made the entire video production feel effortless. Their creativity, coordination, and attention to detail ensured everything ran on schedule.",
    author: "Allie",
    role: "Event Organizer",
  },
  {
    quote: "Excellent service, timely production, and high-quality editing. They handled multiple locations with ease and kept everything organized and stress-free.",
    author: "Daniel L",
    role: "Founder and CEO of Growth Glitch",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center border-b border-white/20 pb-2 mb-8 w-fit mx-auto">
             <span className="text-white/60 text-sm">Testimonial</span>
          </div>
          <h2 className="text-4xl md:text-[56px] font-medium text-white mb-6 tracking-tight">
            What our Clients Say <br />
            about Beige.
          </h2>
          <p className="text-white/50 text-base max-w-[600px] mx-auto font-light">
             See how Beige has helped clients book top creators with confidence, providing reliable talent, transparent details, and seamless communication for projects of every size and style.
          </p>
        </motion.div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`
                p-8 rounded-[16px] border transition-all duration-300 relative group flex flex-col justify-between h-full
                ${testimonial.active 
                    ? "bg-[#1A1A1A] border-white/20 scale-105 shadow-2xl z-10" 
                    : "bg-[#0A0A0A] border-white/5 hover:border-white/10"}
              `}
            >
                <div>
                    {/* User Avatar Placeholder */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-[48px] h-[48px] rounded-full bg-[#E8D1AB] flex items-center justify-center text-black font-bold text-lg">
                            {testimonial.author.charAt(0)}
                        </div>
                        <div className="text-left">
                            <h4 className="text-white font-medium text-lg leading-tight">{testimonial.author}</h4>
                            <p className="text-white/40 text-sm font-light">{testimonial.role}</p>
                        </div>
                    </div>

                    <p className={`text-[15px] leading-[26px] font-light ${testimonial.active ? "text-white/80" : "text-white/50"}`}>
                        &quot;{testimonial.quote}&quot;
                    </p>
                </div>
                
                {/* Active Indicator (optional based on image (8).png red badge) */}
                {testimonial.active && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#FF4400] text-white text-[10px] font-bold px-2 py-1 rounded">
                        5273
                    </div>
                )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
