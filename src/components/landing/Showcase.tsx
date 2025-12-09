"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SHOWCASE_IMAGES = [
  {
    src: "/images/misc/profile.png",
    alt: "Professional Photography",
    span: 1,
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/misc/image.png",
    alt: "Event Coverage",
    span: 2,
    aspect: "aspect-video",
  },
  {
    src: "/images/misc/equipment.png",
    alt: "Studio Equipment",
    span: 1,
    aspect: "aspect-square",
  },
  {
    src: "/images/misc/bluebeige.png",
    alt: "Creative Production",
    span: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/misc/profile.png",
    alt: "Portrait Session",
    span: 1,
    aspect: "aspect-square",
  },
  {
    src: "/images/misc/image.png",
    alt: "Fashion Photography",
    span: 1,
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/misc/equipment.png",
    alt: "Professional Gear",
    span: 2,
    aspect: "aspect-video",
  },
  {
    src: "/images/misc/bluebeige.png",
    alt: "Creative Work",
    span: 1,
    aspect: "aspect-[4/3]",
  },
];

export const Showcase = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ECE1CE]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
            Showcase
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Visual Excellence in
            <br />
            <span className="text-[#ECE1CE]">Every Frame</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            A curated collection of our finest work, showcasing the quality and creativity that defines Beige Media
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {SHOWCASE_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`
                group relative overflow-hidden rounded-xl
                ${image.span === 2 ? "col-span-2" : "col-span-1"}
                ${image.aspect}
                bg-zinc-900
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-[#ECE1CE] text-black font-semibold rounded-full hover:bg-[#d4c9b3] transition-colors duration-300">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

