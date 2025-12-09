"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote: "Beige Media transformed our event coverage. The livestream quality was exceptional and our engagement skyrocketed.",
    author: "Sarah Johnson",
    role: "Marketing Director at TechCorp",
  },
  {
    quote: "Professional, creative, and reliable. They captured every moment perfectly.",
    author: "Michael Chen",
    role: "Event Coordinator",
  },
  {
    quote: "The team's attention to detail and technical expertise is unmatched.",
    author: "Emily Rodriguez",
    role: "Brand Manager",
  },
  {
    quote: "Working with Beige Media elevated our brand presence. Their livestream production quality is world-class.",
    author: "David Park",
    role: "Head of Events at Creative Studios",
  },
  {
    quote: "From booking to delivery, the entire experience was seamless. Highly recommend for any major event.",
    author: "Jennifer Martinez",
    role: "Festival Director",
  },
  {
    quote: "The platform made it incredibly easy to find and book the perfect creator for our needs. Outstanding service.",
    author: "Alex Thompson",
    role: "Social Media Manager",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join hundreds of brands and creators who trust Beige Media for professional event coverage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 md:p-8 h-full flex flex-col hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                {/* Quote Icon */}
                <div className="text-[#ECE1CE] text-5xl leading-none mb-4 opacity-40">
                  "
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg leading-relaxed mb-6 text-white/80 flex-grow">
                  {testimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto">
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
