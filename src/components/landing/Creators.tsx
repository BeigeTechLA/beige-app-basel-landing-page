"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export const Creators = () => {
  return (
    <AnimatedSection className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content LEFT - 50% (REVERSED) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center lg:order-1 order-2"
          >
            <div className="mb-6">
              <p className="text-[#ECE1CE] text-xs font-mono uppercase tracking-widest mb-4">
                For Creators
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Create Without Limits
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Access professional videography and photography services
                tailored for content creators. Focus on your creativity while
                we handle the technical excellence.
              </p>
            </div>

            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="beige"
                  size="lg"
                  className="rounded-full shadow-[0_0_20px_-5px_#ECE1CE]"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image RIGHT - 50% (REVERSED) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative w-full lg:order-2 order-1"
          >
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden relative group">
              <video
                src="/camerav.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
};
