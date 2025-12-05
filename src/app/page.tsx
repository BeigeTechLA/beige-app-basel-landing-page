"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Camera, 
  Video, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// --- ASSETS & CONSTANTS ---
const BRANDS = [
  "DHL",
  "Rolls Royce",
  "Amazon",
  "Orange Theory",
  "The League",
  "South African Tourism Board",
  "Chase"
];

const SERVICES = [
  {
    title: "AI Matchmaking",
    description: "Instantly match with the perfect creative based on your specific project needs, style, and budget.",
    icon: Zap
  },
  {
    title: "Pre-Production",
    description: "Streamlined planning tools, mood boards, and scheduling to ensure your shoot runs flawlessly.",
    icon: Users
  },
  {
    title: "Production",
    description: "On-set management and real-time coordination tools to keep everyone in sync.",
    icon: Camera
  },
  {
    title: "Post-Production",
    description: "Seamless file transfer, review cycles, and final delivery management in one place.",
    icon: Video
  }
];

const TESTIMONIALS = [
  { id: 1, image: "/images/misc/profile.png" },
  { id: 2, image: "/images/misc/image.png" },
  { id: 3, image: "/images/misc/equipment.png" },
  { id: 4, image: "/images/misc/bluebeige.png" },
  { id: 5, image: "/images/misc/USA.png" },
];

// --- COMPONENTS ---

const NavbarChoice = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-center">
        <div className={`
          w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
          ${isScrolled ? 'bg-black/80 backdrop-blur-lg border border-white/10 shadow-lg' : 'bg-transparent border border-transparent'}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
             <img src="/images/logos/beige_logo_vb.png" alt="BEIGE" className="h-8 w-auto object-contain" />
          </Link>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://beige.app/Auth/Login" className="text-sm font-medium text-white hover:text-[#ECE1CE] transition-colors">
              Log in
            </a>
            <a href="https://form.typeform.com/to/uPQyrRea" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-[#ECE1CE] text-black hover:bg-[#dcb98a] rounded-full px-6 h-9 text-sm font-semibold transition-transform hover:scale-105"
              >
                Become An Investor
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="https://beige.app/Auth/Login" className="text-lg font-medium text-white/80 hover:text-[#ECE1CE]">
              Log in
            </a>
            <a href="https://form.typeform.com/to/PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-[#ECE1CE] text-black">Become An Investor</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BrandMarquee = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px w-8 bg-white/30" />
                 <span className="text-white/50 text-xs uppercase tracking-widest">Our Clients</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.1] mb-6">
                Trusted by Top Brands and <br className="hidden md:block" />
                <span className="text-white/60">Creators Worldwide.</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-lg">
                Beige Media makes it easy for brands to create any video they need with a single, trusted partner. 
                Our fast, simple, and transparent process takes the stress out of video production, making it smooth and hassle-free.
              </p>
            </div>
          </div>

          {/* Right Logo Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="/logosection.png" 
                alt="Trusted Brands" 
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 h-[600px]"
          >
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-[2rem] overflow-hidden border border-white/5">
              <img 
                src="/images/misc/equipment.png" 
                alt="Beige Ecosystem" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-normal" 
              />
              <video 
                src="/camerav.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-normal hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#ECE1CE] animate-pulse" />
                  <span className="text-xs font-medium text-[#ECE1CE] uppercase tracking-widest">Live Now</span>
                </div>
                <p className="text-white text-sm leading-relaxed font-light">
                  &quot;The ecosystem for creators and brands to collaborate seamlessly.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[#ECE1CE]" />
                <span className="text-[#ECE1CE] text-xs font-mono uppercase tracking-widest">Beige Media</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-semibold text-white leading-[1.1] mb-8">
                Where Culture Gets <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECE1CE] to-white">
                  Captured. Instantly.
                </span>
              </h2>
              <p className="text-white/50 text-lg font-light max-w-lg leading-relaxed mb-10">
                From cultural moments and IRL streams to music videos, corporate events, weddings, and films—book the perfect photographer, videographer, or livestream creator in minutes through our AI-powered content marketplace
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {[
                { label: "Shoots Produced", value: "$10M+" },
                { label: "Shoots Booked", value: "4,000+" },
                { label: "Creatives in Ecosystem", value: "5,000+" },
                { label: "To Book A Shoot", value: ">60 Sec" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingExperience = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    { 
      title: "01 — Instant Pricing", 
      desc: "Our dynamic pricing engine pulls data from 4,000+ Beige shoots to give you real-time, transparent pricing that works for both creatives and clients. No guesswork. No back-and-forth. Just instant clarity." 
    },
    { 
      title: "02 — Intelligent Matchmaking", 
      desc: "Our matchmaking algorithm learns your style, preferences, and shoot requirements to pair you with the perfect creative — whether you're capturing a music video, a wedding, or an IRL stream that needs to hit right now." 
    },
    { 
      title: "03 — The Home for the Future of Content", 
      desc: "Join the Beige ecosystem and unlock the full stack: book creators, locations, and equipment instantly, and run your entire production workflow through BeigeOS — our proprietary operating system built to power shoots of every size." 
    }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Left: Features List */}
          <div className="w-full lg:w-1/2">
            <div className="mb-16">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">The Process</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-white">
                Booking a Shoot Has <br/> 
                <span className="text-[#ECE1CE]">Never Been This Easy</span>
                </h2>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 border ${activeFeature === i ? 'bg-white/5 border-[#ECE1CE]/20' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                  onClick={() => setActiveFeature(i)}
                >
                  <div className="flex items-center gap-6 mb-3">
                    <h3 className={`text-xl font-medium transition-colors duration-300 ${activeFeature === i ? 'text-white' : 'text-white/40'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {activeFeature === i && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 pl-0 text-base leading-relaxed font-light pt-2">
                            {feature.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual Preview */}
          <div className="w-full lg:w-1/2 relative h-[600px] bg-[#0A0A0A] rounded-[2rem] overflow-hidden border border-white/10 group">
             <div className="absolute inset-0">
                {/* Simulated UI for the active feature */}
                <img 
                  src="/beigecom.gif" 
                  alt="Feature Preview" 
                  className="w-full h-full object-cover opacity-60"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function LandingPageChoice() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ECE1CE] selection:text-black overflow-x-hidden">
      <NavbarChoice />

      {/* HERO */}
      <header ref={heroRef} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Grid Background with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
          style={{ y: y2 }}
        />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
          style={{ y: y1 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-16">
            
            {/* Hero Content (Centered) */}
        <motion.div 
              className="w-full max-w-4xl text-center flex flex-col items-center"
          style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono mb-8 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECE1CE] animate-pulse shadow-[0_0_10px_#ECE1CE]" />
                <span className="tracking-wider text-white/80">Beige Launches in Miami Art Basel 2025</span>
            </motion.div>
              
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8 leading-[1.1]"
                style={{
                  background: "linear-gradient(92deg, #FFF 2.28%, rgba(255, 255, 255, 0.94) 60.83%, rgba(255, 255, 255, 0.20) 109.33%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent"
                }}
              >
                The Ultimate Platform for Livestreaming,<br/>
                <span className="font-bold">
                   Photography & Videography
                </span>
            </h1>
              
              <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                From cultural moments to world-class productions, book the perfect creator for live streaming, videography, and photography in minutes with our AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://form.typeform.com/to/AHPVtBEm">
                    <Button className="bg-[#ECE1CE] text-black hover:bg-[#dcb98a] h-12 px-8 rounded-full text-base font-medium transition-all shadow-[0_0_20px_-5px_#ECE1CE]">
                      Book Shoots
                    </Button>
                  </a>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://beige.app/cp-registration">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black h-12 px-8 rounded-full text-base font-medium backdrop-blur-sm transition-all">
                      Find Creative Work
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Video/Visual (Centered Below) */}
            <motion.div 
              className="w-full max-w-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ y: y1 }}
            >
              <img src="/cards.png" alt="Showreel Cover" className="w-full h-[50%] object-cover group-hover:scale-105 transition-transform duration-700" />
        </motion.div>

          </div>
        </div>
      </header>

      <StatsSection />
      <BookingExperience />

      {/* TRUSTED BY */}
      <BrandMarquee />

      {/* SERVICES GRID */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Chosen by leading professionals <br/>
              to showcase their talent.
            </h2>
            <a href="https://beige.app">
              <Button variant="link" className="text-[#ECE1CE] hidden md:flex text-base hover:text-white transition-colors p-0">
                View All Services <ArrowRight size={18} className="ml-2" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <a key={i} href="https://beige.app" className="block h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#ECE1CE]/30 transition-all duration-300 relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="text-[#ECE1CE]" size={20} />
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-white group-hover:text-[#ECE1CE] group-hover:bg-[#ECE1CE]/10 transition-colors border border-white/5">
                    <service.icon size={26} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#ECE1CE] transition-colors">{service.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{service.description}</p>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-12 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <img src="/images/logos/beige_logo_vb.png" alt="BEIGE" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-white/40 text-xs">
              &copy; 2026 Beige Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
