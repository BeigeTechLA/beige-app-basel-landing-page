"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Updated project data matching the screenshot
const PROJECTS = [
  {
    title: "Smiles Forever",
    description: "We collaborated with Smiles Forever Dental Clinic to produce heartfelt testimonials showcasing their patient-first mentality and professionalism that keeps every smile glowing.",
    image: "/images/misc/profile.png",
    active: false,
  },
  {
    title: "Bear Robotics",
    description: "We showcased Bear Robotics cutting-edge foodservice robots through stunning visuals that captured their innovation, precision, and the real-world impact they're making in the industry.",
    image: "/images/misc/image.png",
    active: true, // Center focus
  },
  {
    title: "Rolls-Royce",
    description: "Our exclusive behind-the-scenes video took a closer look at the craftsmanship, engineering, and advanced technology that powers Rolls-Royce's legendary vehicles.",
    image: "/images/misc/equipment.png",
    active: false,
  },
];

export const Projects = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center border-b border-white/20 pb-2 mb-8 w-fit">
               <span className="text-white/60 text-sm">Our Projects</span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-medium text-white leading-tight mb-4 tracking-tight">
              Beige Featured Projects.
            </h2>
            <p className="text-white/50 text-base font-light max-w-xl">
                Highlighting standout work crafted by our top creators across diverse industries and styles.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors group">
                  <ArrowLeft size={20} className="text-white/60 group-hover:text-white transition-colors" />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors group">
                  <ArrowRight size={20} className="text-white/60 group-hover:text-white transition-colors" />
              </button>
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
              <div className="aspect-[0.8] relative rounded-[20px] overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay - Stronger at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-4 group-hover:text-white/80 transition-colors duration-300">
                        {project.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
