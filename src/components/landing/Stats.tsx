"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const STATS = [
  { value: "$10M+", label: "In Shoots Produced By Our Creatives" },
  { value: "5,000+", label: "Beige Creatives In Our Ecosystem" },
  { value: "4,000+", label: "Shoots Booked" },
  { value: ">60", label: "Seconds To Book A Shoot" },
];

export const Stats = () => {
  return (
    <div className="w-full border-t border-white/10 pt-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center relative flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl md:text-[40px] font-bold text-[#ECE1CE] mb-3 whitespace-nowrap">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-white/50 font-light leading-snug max-w-[180px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
