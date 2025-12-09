"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
}

interface SubmitState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export const Waitlist = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitState({
        status: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitState({
        status: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setSubmitState({ status: "loading", message: "" });

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitState({
        status: "success",
        message: "You've been added to the waitlist!",
      });

      // Reset form
      setFormData({ name: "", email: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitState({ status: "idle", message: "" });
      }, 5000);
    } catch (error) {
      setSubmitState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ECE1CE]/5 to-transparent pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Waitlist
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/60 mb-8">
            Be the first to experience the future of livestreaming,
            photography, and videography booking.
          </p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ECE1CE] to-[#dcb98a] border-2 border-black" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-300 border-2 border-black" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ECE1CE] to-[#dcb98a] border-2 border-black" />
            </div>
            <span className="text-sm text-white/70">
              Join 1,000+ creators and brands
            </span>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={submitState.status === "loading"}
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ECE1CE] focus:border-transparent transition-all disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={submitState.status === "loading"}
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ECE1CE] focus:border-transparent transition-all disabled:opacity-50"
            />
            <Button
              type="submit"
              variant="beige"
              size="default"
              disabled={submitState.status === "loading"}
              className="w-full md:w-auto px-8"
            >
              {submitState.status === "loading" ? "Joining..." : "Join Waitlist"}
            </Button>
          </motion.form>

          {/* Status Messages */}
          {submitState.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg text-sm ${
                submitState.status === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {submitState.message}
            </motion.div>
          )}

          {/* Additional Info */}
          <p className="text-sm text-white/40 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

