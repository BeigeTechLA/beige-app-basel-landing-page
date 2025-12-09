"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-32">
          
          {/* Left: Image/Video Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[600px] relative shrink-0"
          >
            <div className="relative aspect-square rounded-[20px] overflow-hidden bg-zinc-900 border border-white/5">
                {/* Main Video/Image */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/videosnap.mp4" type="video/mp4" />
                </video>
                
                {/* Title Overlay in Image */}
                <div className="absolute top-10 left-10 right-10">
                    <h3 className="text-4xl font-bold text-[#e8d1ab] mb-2 uppercase">LUCYPALOOZA</h3>
                    <p className="text-sm text-[#e8d1ab]/70 uppercase tracking-widest">PRESENTED BY PASSES</p>
                </div>

                {/* Overlay Badge */}
                <div className="absolute bottom-10 left-10">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] px-4 py-3 flex flex-col items-start min-w-[200px]">
                         <div className="flex items-center gap-2 mb-1">
                             <div className="w-2 h-2 bg-white rounded-full" />
                             <span className="text-white text-xs font-medium tracking-wide">BETA LIVE NOW</span>
                         </div>
                         <p className="text-white/60 text-xs">Beige is the Future of Content</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center flex-grow pt-8"
          >
             {/* Label */}
             <div className="inline-flex items-center border-b border-white/20 pb-2 mb-8 w-fit">
                <span className="text-white/60 text-sm">About Beige</span>
             </div>

             {/* Heading */}
             <h2 className="text-4xl md:text-[56px] leading-[1.1] font-medium text-white mb-8 tracking-tight">
                Where Culture Gets Captured. <br />
                Instantly.
             </h2>

             {/* Description */}
             <p className="text-white/60 text-base leading-relaxed max-w-[600px] mb-12 font-light">
                From cultural moments and IRL streams to music videos, corporate events, weddings, and films—book the perfect photographer, videographer, or livestream creator in minutes through our AI-powered content marketplace.
             </p>

             {/* View More Button */}
             <Button 
                className="bg-[#ECE1CE] text-[#030303] hover:bg-[#dcb98a] h-[56px] w-[180px] rounded-[8px] text-base font-medium flex items-center justify-between px-6 pl-8"
             >
                <span>View More</span>
                <ArrowRight size={18} className="ml-2" />
             </Button>

          </motion.div>
        </div>

        {/* Stats Section Integrated at Bottom */}
        <Stats />

      </Container>
    </section>
  );
};
