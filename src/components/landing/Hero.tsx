"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative pt-[180px] pb-20 overflow-hidden min-h-screen flex flex-col items-center bg-[#050505]"
    >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
             {/* Gradient/Noise can go here */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
             
             {/* Star/Sparkle Elements based on image */}
             <div className="absolute top-[30%] left-[10%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white/50 to-transparent rotate-0" />
             <div className="absolute top-[30%] left-[10%] w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-0 -translate-x-[49px] translate-y-[49px]" />
             
             <div className="absolute bottom-[30%] right-[10%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white/50 to-transparent rotate-0" />
             <div className="absolute bottom-[30%] right-[10%] w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-0 -translate-x-[49px] translate-y-[49px]" />
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Launch Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="w-auto px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2">
            <span className="text-[#ECE1CE]">✦</span>
            <span className="text-white/70 text-sm font-medium">Beige Launches in Miami Art Basil 2025 →</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center max-w-[1237px] mb-16"
        >
             <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[1.1] font-bold text-white tracking-tight">
                The Ultimate Platform for Livestreaming,
                <br />
                <span className="text-white/50">Photography & Videography</span>
             </h1>
        </motion.div>

        {/* Buttons */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-32"
        >
            <Button 
                className="w-[180px] h-[56px] rounded-full text-base font-medium bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] border border-white/10"
            >
                Book a Shoot
            </Button>
            <Button 
                className="w-[200px] h-[56px] rounded-full text-base font-medium bg-[#ECE1CE] text-[#030303] hover:bg-[#dcb98a]"
            >
                Find a Creative Work
            </Button>
        </motion.div>

        {/* Subheadline (positioned lower or bottom) */}
        <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-center max-w-[600px] mb-12"
        >
            <p className="text-sm md:text-base text-[#999999] leading-relaxed">
                From cultural moments to world-class productions, book the perfect creator for live streaming, videography, and photography in minutes with our AI-powered platform.
            </p>
        </motion.div>

      </div>
    </section>
  );
};
