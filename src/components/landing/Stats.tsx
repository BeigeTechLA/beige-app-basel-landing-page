"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const STATS = [
  { value: "500+", label: "Events Covered" },
  { value: "1000+", label: "Creators Connected" },
  { value: "10K+", label: "Hours Streamed" },
  { value: "98%", label: "Client Satisfaction" },
];

export const Stats = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center relative"
            >
              {/* Optional divider (hidden on last item in row) */}
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-white/10" />
              )}

              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-white/60 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

