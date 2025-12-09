"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Placeholder project data
const PROJECTS = [
  {
    title: "Smiles Forever",
    category: "Commercial",
    image: "/images/misc/profile.png",
  },
  {
    title: "Bear Robotics",
    category: "Tech",
    image: "/images/misc/image.png",
  },
  {
    title: "Rolls-Royce",
    category: "Automotive",
    image: "/images/misc/equipment.png",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] border-t border-white/5">
      <Container>
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center border-y border-white/70 py-2 mb-8 w-fit">
               <span className="text-white text-base px-2">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-[58px] font-medium text-white leading-tight">
              Selected Projects
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:text-[#ECE1CE] transition-colors pb-2 border-b border-white/30 hover:border-[#ECE1CE]">
             View All Projects <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[0.9] relative rounded-[12px] overflow-hidden mb-6 bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                     <div className="bg-[#ECE1CE] text-black px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                         View Project
                     </div>
                </div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
            <button className="flex items-center gap-2 text-white pb-2 border-b border-white/30">
                View All Projects <ArrowUpRight size={18} />
            </button>
        </div>
      </Container>
    </section>
  );
};

