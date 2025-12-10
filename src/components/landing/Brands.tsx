"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

// Note: Using text placeholders for now.

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
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const videoFileName = "Brands Video.mp4";

  useEffect(() => {
    const fetchSignedUrl = async () => {
      try {
        const response = await fetch(`/api/video/${videoFileName}`);

        if (!response.ok) {
          throw new Error("Failed to fetch signed URL.");
        }

        const data = await response.json();
        setVideoUrl(data.url);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchSignedUrl();
  }, [videoFileName]);

  return (
    <section className="py-20 md:py-32 bg-[#101010] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="w-full lg:w-[720px] shrink-0">
            <div className="border-b border-t border-b-white/60 border-t-white/60 w-fit px-10 py-2 text-center mb-6">
              <p className="text-base text-white">
                Our Clients
              </p>
            </div>

            <h2 className="text-2xl md:text-[56px] leading-[1.1] font-medium text-gradient-white mb-8 tracking-tight">
              Trusted by Top Brands and Creators Worldwide
            </h2>

            <p className="text-white/70 text-sm lg:text-base leading-[28px] font-light">
              Beige Media makes it easy for brands to create any video they need with a single, trusted partner. Our fast, simple, and transparent process takes the stress out of video production, making it smooth and hassle-free.
            </p>
          </div>

          {/* Right Grid */}
          <div className="w-full">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
              {
                videoUrl &&
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              }
              <div className="pointer-events-none absolute -bottom-2 left-0 w-full h-10 lg:h-[80px] z-[2] bg-gradient-to-t from-[#010101] via-[#010101]/80 to-transparent" />
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {BRANDS.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="aspect-square bg-[#0A0A0A] rounded-[16px] border border-white/5 flex items-center justify-center p-8 hover:border-white/20 hover:bg-[#111] transition-all duration-300"
                        > */}
            {/* Placeholder for Logo */}
            {/* <span className="text-lg font-semibold text-white/40 uppercase tracking-widest">{brand.name}</span>
                        </motion.div>
                    ))}
                </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};
