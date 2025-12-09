"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const INFLUENCERS = [
  {
    name: "Natasha Graziano",
    followers: "13.7M",
    reach: "11M Reach in 24 Hours",
    image: "/images/misc/profile.png", 
    color: "#ff0055" // Instagram-ish color
  },
  {
    name: "Pressa Armani",
    followers: "439K",
    reach: "128k Reach in 48 Hours",
    image: "/images/misc/image.png", 
    color: "#ff0055"
  },
];

export const Influencers = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center border-b border-white/20 pb-2 mb-8">
            <span className="text-white/60 text-sm">Top Influentials</span>
          </div>
          
          <h2 className="text-4xl md:text-[56px] leading-[1.2] font-medium text-white mb-6 tracking-tight">
            Partnered with the World’s <br />
            Top Influentials
          </h2>
          
          <p className="text-white/50 text-base leading-[28px] font-light max-w-[600px] mx-auto">
            Beige Media makes it easy for brands to create any video they need with a single, trusted partner. Our fast, simple, and transparent process takes the stress out of video production.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {INFLUENCERS.map((influencer, index) => (
                <div key={index} className="flex flex-col gap-8">
                    {/* Stats Badge */}
                    <div className="flex items-center gap-4">
                        <div className="bg-[#ECE1CE] rounded-[8px] px-4 py-2 flex items-center gap-2">
                            <span className="text-[#030303] text-xl font-bold">{influencer.followers}</span>
                            <span className="text-[#030303]/70 text-sm">Followers</span>
                        </div>
                        {/* Platform Icon Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <div className="w-5 h-5 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-md" />
                        </div>
                    </div>

                    <h3 className="text-3xl text-white font-medium">{influencer.name}</h3>
                    
                    <div className="flex items-center gap-2 text-[#ECE1CE]">
                        <TrendingUp size={20} />
                        <span className="text-lg">{influencer.reach}</span>
                    </div>

                    <p className="text-white/50 text-lg leading-relaxed mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    {/* Image Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-[500px] relative rounded-[20px] overflow-hidden bg-zinc-800 border border-white/5 group"
                    >
                        <Image
                            src={influencer.image}
                            alt={influencer.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
};
