"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { DollarSign, Video, Users, Play } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-24">
          
          {/* Left: Feature Cards */}
          <div className="w-full lg:w-[400px] flex flex-col gap-4 shrink-0">
             {/* Section Label */}
             <div className="border-b border-white/20 pb-2 mb-8 w-fit">
                <span className="text-white/60 text-sm">How it works</span>
             </div>

             <h2 className="text-4xl md:text-[48px] leading-[1.1] font-medium text-white mb-8 tracking-tight">
                Booking a Shoot Has Never <br />
                Been This Easy.
             </h2>

             {/* Card 1 - Active */}
             <div className="relative w-full rounded-[16px] bg-[#1A1A1A] border border-[#e8d1ab]/30 overflow-hidden p-6 group transition-all duration-300">
                <div className="flex flex-col gap-4">
                    <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-b from-[#e8d1ab] to-[#e8d1ab]/30 flex items-center justify-center shrink-0">
                        <DollarSign className="text-black w-[24px] h-[24px]" />
                    </div>
                    <div>
                        <h3 className="text-[18px] font-medium text-white mb-2">Instant Pricing</h3>
                        <p className="text-[14px] leading-[22px] text-white/50 font-light">
                            Our dynamic pricing engine pulls data from 4,000+ Beige shoots to give you real-time, transparent pricing that works for both creatives and clients.
                        </p>
                    </div>
                </div>
             </div>

             {/* Card 2 */}
             <div className="relative w-full rounded-[16px] bg-[#0A0A0A] border border-white/10 overflow-hidden p-6 group hover:bg-[#1A1A1A] transition-all duration-300">
                <div className="flex flex-col gap-4">
                    <div className="w-[48px] h-[48px] rounded-[12px] bg-white/10 flex items-center justify-center shrink-0">
                        <Users className="text-white w-[24px] h-[24px]" />
                    </div>
                    <div>
                        <h3 className="text-[18px] font-medium text-white mb-2">Intelligent Matchmaking</h3>
                        <p className="text-[14px] leading-[22px] text-white/50 font-light">
                            Our matchmaking algorithm learns your style to pair you with the perfect creative instantly.
                        </p>
                    </div>
                </div>
             </div>

             {/* Card 3 */}
             <div className="relative w-full rounded-[16px] bg-[#0A0A0A] border border-white/10 overflow-hidden p-6 group hover:bg-[#1A1A1A] transition-all duration-300">
                <div className="flex flex-col gap-4">
                    <div className="w-[48px] h-[48px] rounded-[12px] bg-white/10 flex items-center justify-center shrink-0">
                        <Video className="text-white w-[24px] h-[24px]" />
                    </div>
                    <div>
                        <h3 className="text-[18px] font-medium text-white mb-2">The Home for the Future of Content</h3>
                        <p className="text-[14px] leading-[22px] text-white/50 font-light">
                            Join the Beige ecosystem and unlock the full stack: book creators, locations, and equipment instantly.
                        </p>
                    </div>
                </div>
             </div>
          </div>

          {/* Right: Showcase Visual (App Screenshot) */}
          <div className="w-full lg:flex-grow relative h-[500px] lg:h-[700px] rounded-[24px] overflow-hidden border border-white/10 bg-zinc-900 group mt-12 lg:mt-0">
                <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
                    {/* Simulated UI based on image (6).png */}
                    <div className="w-[90%] max-w-[800px] aspect-video relative bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 right-0 h-[60px] border-b border-white/10 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md z-10">
                            <div className="w-[80px] h-[20px] bg-white/20 rounded-full" />
                            <div className="flex gap-4">
                                <div className="w-[60px] h-[30px] border border-white/20 rounded-full" />
                                <div className="w-[100px] h-[30px] bg-[#ECE1CE] rounded-full" />
                            </div>
                        </div>
                        <div className="absolute inset-0 pt-[60px] flex items-center justify-center">
                             <div className="text-center">
                                 <h3 className="text-2xl text-white font-bold mb-4">The Ultimate Platform for Livestreaming</h3>
                                 <div className="flex justify-center gap-4 mt-8">
                                     <div className="w-[120px] h-[80px] bg-zinc-800 rounded-lg" />
                                     <div className="w-[120px] h-[80px] bg-zinc-800 rounded-lg" />
                                     <div className="w-[120px] h-[80px] bg-zinc-800 rounded-lg" />
                                     <div className="w-[120px] h-[80px] bg-zinc-800 rounded-lg" />
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute bottom-8 right-8 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg z-20">
                    <Play className="w-[20px] h-[20px] text-black fill-black ml-1" />
                </div>
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="flex justify-end">
             <p className="text-[16px] leading-[28px] text-white/50 font-light max-w-[500px] text-right">
                Experience effortless booking with quick access to trusted creators and professionals— all in one seamless platform, helping you find the perfect match for every shoot with ease and confidence.
             </p>
        </div>
      </Container>
    </section>
  );
};
