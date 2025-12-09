"use client";

import React from "react";
import { Video, Camera, Radio } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Radio,
    title: "Livestreaming",
    description:
      "Professional livestreaming services for events, conferences, and special occasions",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "High-quality event photography capturing every memorable moment",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic videography services for brands and creators",
  },
];

export const Booking = () => {
  return (
    <AnimatedSection className="py-20 md:py-32">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            What We Offer
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional creative services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} hover className="p-8">
                <div className="flex flex-col h-full">
                  <IconComponent className="size-12 text-[#ECE1CE] mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="w-fit px-0 text-[#ECE1CE] hover:text-[#dcb98a]"
                  >
                    Learn More →
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
};
