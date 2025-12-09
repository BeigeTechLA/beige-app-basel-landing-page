"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Art Basel 2024",
    client: "Basel Inc",
    category: "Livestream",
    image: "/images/misc/profile.png",
  },
  {
    title: "Fashion Week NYC",
    client: "NYFW",
    category: "Photography",
    image: "/images/misc/image.png",
  },
  {
    title: "Tech Conference",
    client: "TechCorp",
    category: "Videography",
    image: "/images/misc/equipment.png",
  },
  {
    title: "Music Festival Live",
    client: "Coachella Productions",
    category: "Livestream",
    image: "/images/misc/bluebeige.png",
  },
  {
    title: "Corporate Summit",
    client: "Fortune 500 Co",
    category: "Photography",
    image: "/images/misc/profile.png",
  },
  {
    title: "Product Launch Event",
    client: "Apple Inc",
    category: "Videography",
    image: "/images/misc/image.png",
  },
  {
    title: "Award Show Coverage",
    client: "Grammy Awards",
    category: "Livestream",
    image: "/images/misc/equipment.png",
  },
  {
    title: "Wedding Portfolio",
    client: "Elite Weddings",
    category: "Photography",
    image: "/images/misc/bluebeige.png",
  },
  {
    title: "Documentary Series",
    client: "Netflix Studios",
    category: "Videography",
    image: "/images/misc/profile.png",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Featured Work
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-video rounded-xl overflow-hidden mb-4 relative bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#ECE1CE] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ArrowRight className="text-black" size={20} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#ECE1CE] transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#ECE1CE]/20 text-[#ECE1CE] rounded-full text-xs whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-white/60 mt-1">
                  {project.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

