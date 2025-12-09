"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Chris Bentley shares his excitement about working with Beige, praising the team for their professionalism, amazing shots, and smooth collaboration. He's inspired by the experience and looks forward to buying a mansion in Dallas with Beige's help when the time comes.",
    author: "Chris B",
    role: "Award Winning Dallas Real Estate Broker",
  },
  {
    quote: "Excellent service, timely production, and high-quality editing. They handled multiple locations with ease and kept everything organized and stress-free. The team went above and beyond to ensure every detail was captured perfectly. Highly recommend Beige for any local production.",
    author: "Daniel L",
    role: "Founder and CEO of Growth Glitch",
  },
  {
    quote: "From consultation to final output, Beige was professional, communicative and efficient. Delivered a high-quality video exactly as envisioned. Seamless process — I would absolutely work with them again.",
    author: "Kevin F (Co-Founder)",
    role: "Off Season Athlete Marketing Company",
  },
  {
    quote: "Professional, patient, and handled a busy shoot with ease — thanks to thorough planning and smooth execution. The team stayed flexible throughout the day and ensured every detail was captured perfectly. Highly recommend them for any production or brand activation.",
    author: "Keana C",
    role: "Agency Representative",
  },
  {
    quote: "Despite a long shoot, the team's professionalism and smooth workflow made the entire video production feel effortless. Their creativity, coordination, and attention to detail ensured everything ran on schedule.",
    author: "Allie",
    role: "Event Organizer",
  },
  {
    quote: "Excellent service, timely production, and high-quality editing. They handled multiple locations with ease and kept everything organized and stress-free. The team went above and beyond to ensure every detail was captured perfectly. Highly recommend Beige for any local production.",
    author: "Daniel L",
    role: "Founder and CEO of Growth Glitch",
  },
  {
    quote: "From consultation to final output, Beige was professional, communicative and efficient. Delivered a high-quality video exactly as envisioned. Seamless process — I would absolutely work with them again.",
    author: "Kevin F (Co-Founder)",
    role: "Off Season Athlete Marketing Company",
  },
  {
    quote: "Excellent service, timely production, and high-quality editing. They handled multiple locations with ease and kept everything organized and stress-free. The team went above and beyond to ensure every detail was captured perfectly. Highly recommend Beige for any local production.",
    author: "Daniel L",
    role: "Founder and CEO of Growth Glitch",
  },
  {
    quote: "Despite a long shoot, the team's professionalism and smooth workflow made the entire video production feel effortless. Their creativity, coordination, and attention to detail ensured everything ran on schedule.",
    author: "Allie",
    role: "Event Organizer",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="p-8 rounded-[16px] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-full"
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

                    <p className="text-[15px] leading-[26px] font-light text-white/50">
                        &quot;{testimonial.quote}&quot;
                    </p>
                </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
            <Button 
                className="bg-[#E8D1AB] text-black hover:bg-[#dcb98a] h-[56px] px-8 rounded-[8px] text-base font-medium flex items-center gap-3 shadow-[0_0_20px_-5px_rgba(232,209,171,0.3)] transition-all hover:scale-105"
            >
                View More
                <Play className="w-4 h-4 fill-black text-black" />
            </Button>
        </div>
      </Container>
    </section>
  );
};
