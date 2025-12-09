"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/ui/animated-section";

export const Brands = () => {
  return (
    <AnimatedSection className="py-16 md:py-24 border-y border-white/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Powering content creation for the world&apos;s most innovative companies
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden">
            <img
              src="/logosection.png"
              alt="Trusted by leading brands"
              className="w-full h-auto object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
};
