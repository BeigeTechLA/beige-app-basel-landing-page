"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Brain, Clapperboard, Video, Film } from "lucide-react";
import Image from "next/image";

const STEPS = [
  {
    icon: Brain,
    title: "AI Matchmaking",
    description: "Our proprietary AI Matchmaking Algorithm connects you with the perfect videographer or photographer — customized to your shoot type using insights from over 4,000+ Beige productions.",
    active: true,
  },
  {
    icon: Clapperboard,
    title: "Pre Production",
    description: "Once you’ve approved your Beige Creative Partner, we move into pre-production. Our team handles all the planning to ensure your shoot is smooth, efficient, and tailored to your goals.",
    active: false,
  },
  {
    icon: Video,
    title: "Production",
    description: "Lights, camera, action! Your assigned Beige Creative captures your content based on the strategy and materials defined during pre-production.",
    active: false,
  },
  {
    icon: Film,
    title: "AI Powered-Post Production",
    description: "Our team edits your content into polished, on-brand assets across your desired formats — ready for immediate distribution across platforms.",
    active: false,
  },
];

export const Process = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Visual & Title */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
             <div>
                <div className="border-b border-white/20 pb-2 mb-8 w-fit">
                    <span className="text-white/60 text-sm">Our Process</span>
                </div>
                
                <h2 className="text-4xl md:text-[56px] leading-[1.1] font-medium text-white mb-8 tracking-tight">
                    Beige is built by creators, <br />
                    for creators.
                </h2>

                <p className="text-white/50 text-base leading-[28px] font-light mb-12 max-w-[500px]">
                    Beige Media makes it easy for brands to create any video they need with a single, trusted partner. Our fast, simple, and transparent process takes the stress out of video production.
                </p>
             </div>

             {/* Main Visual - Image of production crew */}
             <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden border border-white/10">
                 <div className="absolute inset-0 bg-zinc-800">
                     {/* Placeholder for production image */}
                     <Image 
                        src="/images/misc/equipment.png" 
                        alt="Production Process" 
                        fill 
                        className="object-cover opacity-80"
                     />
                 </div>
                 {/* Badge Overlay */}
                 <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                     <span className="text-white/80 text-sm">Behind the Scenes</span>
                 </div>
             </div>
          </div>

          {/* Right Side: Steps List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {STEPS.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        relative p-8 rounded-[20px] border transition-all duration-300
                        ${step.active 
                            ? "bg-[#1A1A1A] border-white/20" 
                            : "bg-[#0A0A0A] border-transparent hover:bg-[#111] hover:border-white/10"}
                    `}
                >
                    <div className="flex gap-6 items-start">
                         {/* Icon */}
                         <div className={`
                            w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shrink-0 transition-colors
                            ${step.active 
                                ? "bg-[#ECE1CE] text-black" 
                                : "bg-white/10 text-white/60"}
                         `}>
                             <step.icon size={24} />
                         </div>

                         {/* Content */}
                         <div>
                             <h3 className={`text-xl font-medium mb-2 ${step.active ? "text-white" : "text-white/80"}`}>
                                 {step.title}
                             </h3>
                             <p className="text-[15px] leading-[24px] text-white/50 font-light">
                                 {step.description}
                             </p>
                         </div>
                    </div>
                </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
