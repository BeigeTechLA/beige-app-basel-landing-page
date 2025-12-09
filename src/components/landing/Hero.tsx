"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const heroRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header
      ref={heroRef}
      className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center items-center"
    >
      {/* Grainy Texture Overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none mix-blend-overlay"
        style={{ y: y2 }}
      />

      {/* Grid Background with Parallax and Radial Mask */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        style={{ y: y1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-16">
          {/* Hero Content (Centered) */}
          <motion.div
            className="w-full max-w-4xl text-center flex flex-col items-center"
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECE1CE] animate-pulse shadow-[0_0_10px_#ECE1CE]" />
              <span className="tracking-wider text-white/80">
                Beige Launches in Miami Art Basel 2025
              </span>
            </motion.div>

            {/* Main Headline - Large and Bold */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                background:
                  "linear-gradient(92deg, #FFF 2.28%, rgba(255, 255, 255, 0.94) 60.83%, rgba(255, 255, 255, 0.20) 109.33%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              The Ultimate Platform for Livestreaming, Photography & Videography
            </motion.h1>

            {/* Subheadline - Muted Color */}
            <motion.p
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From cultural moments to world-class productions, book the perfect creator for live streaming, videography, and photography in minutes with our AI-powered platform.
            </motion.p>

            {/* CTAs - Primary (Beige) + Secondary (Outline) */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://form.typeform.com/to/AHPVtBEm">
                  <Button className="bg-[#ECE1CE] text-black hover:bg-[#dcb98a] h-12 px-8 rounded-full text-base font-semibold transition-all shadow-[0_0_20px_-5px_#ECE1CE]">
                    Book Now
                  </Button>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#showcase">
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 h-12 px-8 rounded-full text-base font-semibold backdrop-blur-sm transition-all"
                  >
                    View Showcase
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Video/Visual with Parallax */}
          <motion.div
            className="w-full max-w-7xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            style={{ y: y1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
              {!videoError ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  onError={() => setVideoError(true)}
                >
                  <source src="/camerav.mp4" type="video/mp4" />
                  <source src="/videosnap.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src="/cards.png"
                  alt="Beige Platform Showcase"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

