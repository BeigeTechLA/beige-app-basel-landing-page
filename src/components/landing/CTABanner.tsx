"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-16 md:py-24 bg-[#ECE1CE] relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
            Ready to Elevate Your Event?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of brands and creators who trust Beige Media for professional event coverage.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://form.typeform.com/to/AHPVtBEm">
              <Button className="bg-black text-white hover:bg-black/80 h-14 px-10 rounded-full text-lg font-semibold shadow-xl transition-all">
                Get Started Today
                <ArrowRight className="ml-2" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
