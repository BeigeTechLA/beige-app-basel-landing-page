"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient matching image (gold/beige) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E5CFA0] to-[#C9A668] z-0" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center py-16">
          <div className="inline-block border border-black/10 rounded-full px-4 py-1 mb-8">
             <span className="text-black/60 text-sm uppercase tracking-wide">Testimonial</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-black mb-8 leading-tight tracking-tight">
            Transform Your Creative Workflow with Beige
          </h2>

          <p className="text-black/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            From booking to final delivery, Beige empowers you with tools that simplify coordination, improve productivity, and keep every shoot running smoothly.
          </p>

          <div className="flex justify-center items-center gap-12">
              <span className="text-red-600 font-bold text-lg bg-white/20 px-3 py-1 rounded">1002</span>
              
              <Button className="bg-black text-white hover:bg-black/80 h-[56px] px-8 rounded-[8px] text-lg flex items-center gap-2 shadow-xl">
                  Know More
                  <ArrowRight size={20} />
              </Button>

              <span className="text-red-600 font-bold text-lg bg-white/20 px-3 py-1 rounded">854</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
