"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SiAmazon, SiChase, SiDhl, SiRollsroyce, SiFigma, SiNike } from "react-icons/si"; 
// Note: Using react-icons for logos if available, otherwise fallback to text/images.
// Since we might not have these specific icons installed, I'll use placeholders or text.

const BRANDS = [
    { name: "DHL", logo: "/images/logos/dhl.svg" },
    { name: "Amazon", logo: "/images/logos/amazon.svg" },
    { name: "OrangeTheory", logo: "/images/logos/orangetheory.svg" },
    { name: "Rolls-Royce", logo: "/images/logos/rolls-royce.svg" },
    { name: "Chase", logo: "/images/logos/chase.svg" },
    { name: "DHL", logo: "/images/logos/dhl.svg" },
    { name: "OrangeTheory", logo: "/images/logos/orangetheory.svg" },
    { name: "YoungLA", logo: "/images/logos/youngla.svg" },
    { name: "Karat", logo: "/images/logos/karat.svg" },
];

export const Brands = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-[450px] shrink-0">
                <div className="border-b border-white/20 pb-2 mb-8 w-fit">
                    <span className="text-white/60 text-sm">Our Clients</span>
                </div>
                
                <h2 className="text-4xl md:text-[48px] leading-[1.2] font-medium text-white mb-8 tracking-tight">
                    Trusted by Top Brands and Creators Worldwide
                </h2>

                <p className="text-white/50 text-base leading-[28px] font-light">
                    Beige Media makes it easy for brands to create any video they need with a single, trusted partner. Our fast, simple, and transparent process takes the stress out of video production, making it smooth and hassle-free.
                </p>
            </div>

            {/* Right Grid */}
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {BRANDS.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="aspect-square bg-[#0A0A0A] rounded-[16px] border border-white/5 flex items-center justify-center p-8 hover:border-white/20 hover:bg-[#111] transition-all duration-300"
                        >
                            {/* Placeholder for Logo */}
                            <span className="text-lg font-semibold text-white/40 uppercase tracking-widest">{brand.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </Container>
    </section>
  );
};
