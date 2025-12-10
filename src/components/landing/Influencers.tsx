"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const INFLUENCERS = [
  {
    name: "Natasha Graziano",
    followers: "13.7M",
    reach: "11M Reach in 24 Hours",
    image: "/images/influencer/Influencer4.png",
  },
  {
    name: "Pressa Armani",
    followers: "439K",
    reach: "128k Reach in 48 Hours",
    image: "/images/influencer/Influencer2.png",
  },
  {
    name: "Tyler The Creator",
    followers: "439K",
    reach: "128M Reach in 24 Hours",
    image: "/images/influencer/Influencer3.png",
  },
  {
    name: "Gucci Armani",
    followers: "4M",
    reach: "512k Reach in 48 Hours",
    image: "/images/influencer/Influencer1.png",
  },
];

export const Influencers = () => {
  const imageHoverRef = useRef(false);
  const scrollLockRef = useRef(false);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const maxIndex = INFLUENCERS.length - 1;
  const current = INFLUENCERS[index];
  const isLeft = index % 2 === 0;

  /* Desktop scroll logic */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!imageHoverRef.current) return;

      e.preventDefault();
      if (scrollLockRef.current) return;

      scrollLockRef.current = true;

      if (e.deltaY > 0) {
        setDirection("down");
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      } else {
        setDirection("up");
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
      }

      setTimeout(() => {
        scrollLockRef.current = false;
      }, 800);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [maxIndex]);

  return (
    <section className="bg-[#050505] py-20 lg:py-32 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center border-b border-t border-b-white/60 border-t-white/60 w-fit px-10 py-2 text-center mb-6">
            <p className="text-base text-white">Top Influentials</p>
          </div>

          <h2 className="text-2xl md:text-[56px] leading-[1.1] font-medium text-gradient-white mb-6">
            Partnered with the World’s Top Influentials
          </h2>

          <p className="text-sm lg:text-base text-white/50 leading-[28px] font-light max-w-[640px] mx-auto">
            Beige Media makes it easy for brands to create any video they need with a single, trusted partner.
          </p>
        </div>

        {/* ✅ MOBILE VIEW */}
        <div className="flex flex-col gap-10 lg:hidden">
          {INFLUENCERS.map((item, i) => (
            <div
              key={i}
              className="w-full rounded-[20px] overflow-hidden border border-white/10 bg-black"
            >
              {/* Image */}
              <div className="relative w-full h-[360px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/svg/Insta.svg"
                    alt="Instagram"
                    width={34}
                    height={34}
                  />
                  <h3 className="text-xl text-white">{item.name}</h3>
                </div>

                <div className="flex items-center gap-2 text-[#ECE1CE] mb-4">
                  <TrendingUp size={18} />
                  <span className="text-sm font-light">{item.reach}</span>
                </div>

                <p className="text-white/50 text-sm leading-[22px] mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="inline-flex items-center px-5 py-3 bg-[#ECE1CE] rounded-lg">
                  <span className="text-black text-lg font-bold mr-2">
                    {item.followers}
                  </span>
                  <span className="text-black/70 text-sm self-end">
                    Followers
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ DESKTOP VIEW (unchanged behaviour) */}
        <div className="relative items-center justify-center min-h-[620px] hidden lg:flex">

          {/* Center image */}
          <div
            className="relative z-20 w-[420px] h-[380px] 2xl:w-[480px] 2xl:h-[520px] rounded-[24px] overflow-hidden border border-white/10 bg-black"
            onMouseEnter={() => (imageHoverRef.current = true)}
            onMouseLeave={() => (imageHoverRef.current = false)}
          >
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Animated side content */}
          <div className="absolute inset-0 pointer-events-none flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{
                  opacity: 0,
                  y: direction === "down" ? 80 : -80,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: direction === "down" ? -80 : 80,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute top-1/2 -translate-y-1/2 max-w-[420px] ${
                  isLeft ? "left-0" : "right-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={"/svg/Insta.svg"}
                    alt="Instagram Icon"
                    width={40}
                    height={40}
                  />
                  <h3 className="text-2xl xl:text-[40px] text-white">
                    {current.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-[#ECE1CE] mb-4">
                  <TrendingUp size={20} />
                  <span className="font-light text-lg xl:text-2xl">
                    {current.reach}
                  </span>
                </div>

                <p className="text-white/50 text-lg xl:text-2xl font-light leading-relaxed mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div className="inline-flex items-center px-6 py-3 bg-[#ECE1CE] rounded-lg">
                  <span className="text-black text-xl font-bold mr-2">
                    {current.followers}
                  </span>
                  <span className="text-black/70 text-base self-end">
                    Followers
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </Container>
    </section>
  );
};
