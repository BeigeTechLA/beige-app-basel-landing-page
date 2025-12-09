"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does Beige Media offer?",
    answer:
      "We provide professional livestreaming, photography, and videography services for events, conferences, and special occasions.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-4 weeks in advance for best availability.",
  },
  {
    question: "Do you provide equipment?",
    answer:
      "Yes, all professional equipment is included in our service packages.",
  },
  {
    question: "What's your coverage area?",
    answer:
      "We primarily serve the Miami area but are available for events nationwide.",
  },
  {
    question: "Can I see samples of your work?",
    answer:
      "Yes, check our Showcase section or contact us for a full portfolio.",
  },
  {
    question: "What's included in your packages?",
    answer:
      "Each package includes professional crew, equipment, editing, and delivery of final content.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible cancellation up to 7 days before your event. Contact us for specific terms and conditions.",
  },
  {
    question: "Can you accommodate last-minute bookings?",
    answer:
      "While we prefer advance bookings, we'll do our best to accommodate last-minute requests based on availability. Contact us directly to discuss urgent needs.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <Container>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to know about Beige Media services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="border-b border-white/10 py-6"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-[#ECE1CE] transition-colors pr-8">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-[#ECE1CE] transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 leading-relaxed mt-4 pr-12">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

