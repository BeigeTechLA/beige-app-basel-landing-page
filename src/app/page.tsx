"use client";

import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Brands } from "@/components/landing/Brands";
import { Influencers } from "@/components/landing/Influencers";
import { Process } from "@/components/landing/Process";
import { Projects } from "@/components/landing/Projects";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTABanner } from "@/components/landing/CTABanner";
import { FAQ } from "@/components/landing/FAQ";
import { Waitlist } from "@/components/landing/Waitlist";
import { Footer } from "@/components/landing/Footer";
import { Separator } from "@/components/landing/Separator";

export default function Home() {
  return (
    <main className="bg-[#010101] min-h-screen text-white font-sans selection:bg-[#ECE1CE] selection:text-black">
      <Navbar />
      <Hero />
      <Separator />

      <About />
      <Separator />

      <HowItWorks />
      <Separator />

      <Brands />
      <Separator />

      <Influencers />
      <Separator />

      <Process />
      <Separator />

      <Projects />
      <Separator />

      <Gallery />
      <Separator />

      <Testimonials />
      <Separator />

      <CTABanner />
      <Separator />

      <FAQ />
      <Separator />

      <Waitlist />
      <Separator />

      <Footer />
    </main>
  );
}
