"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export const Influencers = () => {
  return (
    <AnimatedSection className="py-20 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image LEFT - 50% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden relative group">
              <img
                src="/cards.png"
                alt="Influencer Events"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content RIGHT - 50% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <p className="text-[#ECE1CE] text-xs font-mono uppercase tracking-widest mb-4">
                For Influencers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Amplify Your Influence
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Partner with Beige Media for professional content creation that
                elevates your brand. From livestreaming to photography, we help
                influencers create unforgettable moments.
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
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
};
