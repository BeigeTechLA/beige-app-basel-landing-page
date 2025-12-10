"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/images/misc/profile.png", alt: "Gallery 1", className: "w-[200px] h-[300px]" },
  { src: "/images/misc/image.png", alt: "Gallery 2", className: "w-[200px] h-[300px] translate-y-12" },
  { src: "/images/misc/equipment.png", alt: "Gallery 3", className: "w-[200px] h-[300px]" },
  // Center Main Image (Phone Mockup Placeholder)
  { src: "/images/misc/bluebeige.png", alt: "Main Showcase", className: "w-[280px] h-[500px] z-10 -translate-y-8 rounded-[32px] border-4 border-zinc-800" },
  { src: "/images/misc/profile.png", alt: "Gallery 5", className: "w-[200px] h-[300px]" },
  { src: "/images/misc/image.png", alt: "Gallery 6", className: "w-[200px] h-[300px] translate-y-12" },
  { src: "/images/misc/equipment.png", alt: "Gallery 7", className: "w-[200px] h-[300px]" },
];

export const Gallery = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const videoFileName = "Gallery Video.mp4";

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
    <section className="bg-[#010101] py-32 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          {/* <div className="inline-flex items-center border-b border-white/20 pb-2 mb-8">
            <span className="text-white/60 text-sm">Gallery</span>
          </div> */}
          <div className="inline-flex items-center border-b border-t border-b-white/60 border-t-white/60 w-fit px-10 py-2 text-center mb-6">
            <p className="text-base text-white">
              Gallery
            </p>
          </div>

          <h2 className="text-2xl md:text-[56px] leading-[1.1] font-medium text-gradient-white mb-6 tracking-tight">
            Chosen by leading professionals to showcase <br />
            their talent and portfolio.
          </h2>

          <p className="text-white/50 text-sm lg:text-base max-w-[600px] mx-auto mb-12">
            The Beige portfolio provides clients with essential details for smarter hiring and offers creatives a world-class stage to display their best work.
          </p>

          {/* Navigation Buttons */}
          {/* <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Horizontal Scroll / Gallery Layout */}
        {/* <div className="relative w-full h-[600px] flex items-center justify-center">
          <div className="flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-[16px] bg-zinc-900 shrink-0 ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            ))}
          </div> */}

        {/* Fades for sides */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-[#010101] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-[#010101] to-transparent z-20 pointer-events-none" />
        </div> */}

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[700px] overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-[80px] z-[2] bg-gradient-to-t from-transparent via-[#010101]/80 to-[#010101]" />
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
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[80px] z-[2] bg-gradient-to-t from-[#010101] via-[#010101]/80 to-transparent" />
        </div>
      </Container>
    </section>
  );
};
