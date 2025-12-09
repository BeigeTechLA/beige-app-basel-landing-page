"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
}

export const Waitlist = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Form Container */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
            >
                 <div className="mb-12">
                     <h2 className="text-4xl md:text-[58px] font-medium text-white mb-6 tracking-tight">
                        Join the Waitlist
                     </h2>
                     <p className="text-lg text-white/60 font-light">
                        Be the first to experience the future of livestreaming, photography, and videography booking.
                     </p>
                 </div>

                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                     <input
                        type="text"
                        name="name"
                        placeholder="Full name*"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-[74px] bg-white/[0.05] border border-white/20 rounded-[8px] px-6 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#ECE1CE] transition-colors"
                     />
                     <input
                        type="email"
                        name="email"
                        placeholder="Email ID*"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-[74px] bg-white/[0.05] border border-white/20 rounded-[8px] px-6 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#ECE1CE] transition-colors"
                     />
                     <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full h-[74px] bg-white/[0.05] border border-white/20 rounded-[8px] px-6 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#ECE1CE] transition-colors"
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full h-[74px] bg-white/[0.05] border border-white/20 rounded-[8px] px-6 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#ECE1CE] transition-colors"
                        />
                     </div>
                     <input
                        type="text"
                        name="city"
                        placeholder="Location (City)*"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full h-[74px] bg-white/[0.05] border border-white/20 rounded-[8px] px-6 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#ECE1CE] transition-colors"
                     />
                     
                     <div className="mt-4">
                         <Button
                            type="submit"
                            variant="beige"
                            className="w-full md:w-[243px] h-[72px] text-lg font-medium rounded-[8px]"
                            disabled={status === "loading"}
                         >
                            {status === "loading" ? "Joining..." : "Join Waitlist"}
                         </Button>
                     </div>
                     
                     {status === "success" && (
                         <div className="text-green-400 mt-4 p-4 bg-green-900/20 border border-green-900/50 rounded-lg">
                             You have successfully joined the waitlist!
                         </div>
                     )}
                 </form>
            </motion.div>

            {/* Visual/Globe Placeholder */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative h-[600px] lg:h-[750px] flex items-center justify-center"
            >
                 {/* Replace with actual Globe component or image */}
                 <div className="w-[90%] h-[90%] relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#ECE1CE]/20 to-transparent rounded-full blur-3xl opacity-30" />
                      <div className="relative z-10 w-full h-full border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                           <div className="w-[80%] h-[80%] border border-white/5 rounded-full" />
                           <div className="w-[60%] h-[60%] border border-white/5 rounded-full" />
                      </div>
                      <div className="absolute inset-0">
                        <Image 
                            src="/globe.svg" 
                            alt="Global Reach" 
                            fill 
                            className="object-contain opacity-50"
                        />
                      </div>
                 </div>
            </motion.div>

        </div>
      </Container>
    </section>
  );
};
