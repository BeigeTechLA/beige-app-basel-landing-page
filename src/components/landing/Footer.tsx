"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <Container>
        <div className="py-16 md:py-20">
          {/* Logo and Tagline */}
          <div className="mb-12">
            <Link href="/" className="inline-block mb-4">
              <span className="text-white text-2xl font-bold tracking-wider">BEIGE</span>
            </Link>
            <p className="text-white/60 text-sm max-w-md">
              Professional event coverage services for brands, creators, and influencers.
            </p>
          </div>

          {/* Four Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* About Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">About</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Beige Media
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#livestreaming" className="text-white/60 hover:text-white transition-colors text-sm">
                    Livestreaming
                  </Link>
                </li>
                <li>
                  <Link href="#photography" className="text-white/60 hover:text-white transition-colors text-sm">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="#videography" className="text-white/60 hover:text-white transition-colors text-sm">
                    Videography
                  </Link>
                </li>
                <li>
                  <Link href="#event-coverage" className="text-white/60 hover:text-white transition-colors text-sm">
                    Event Coverage
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-white/60 hover:text-white transition-colors text-sm">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social/Contact Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Social</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://instagram.com/beigemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#ECE1CE] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/company/beigemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#ECE1CE] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/beigemedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#ECE1CE] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <a
                href="mailto:hello@beigemedia.com"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                hello@beigemedia.com
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Beige Media. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

