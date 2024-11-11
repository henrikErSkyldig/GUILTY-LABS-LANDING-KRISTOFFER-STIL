"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Section } from "@/components/atoms";

export function HeroSection() {
  return (
    <Section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Background dot pattern with gradient overlay */}
      <div className="absolute inset-0">
        <DotPattern
          width={24}
          height={24}
          cx={2}
          cy={2}
          cr={1}
          className="opacity-[0.20] fill-black"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        <div className="text-center relative z-10">
          <motion.div
            className="mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight mb-4">
              Fra idé til MVP på
            </h1>
            <div className="relative inline-flex items-center gap-4">
              <Image
                src="/images/handrawn svg/Highlights-by-Outdraw-Design/12_Doodles/Doodle 4.svg"
                alt="Rocket"
                width={60}
                height={60}
                className="w-14 h-14 [filter:brightness(0)]"
              />

              <span className="text-5xl sm:text-6xl md:text-7xl font-bold font-schoolbell">
                6 uker
              </span>

              <Image
                src="/images/handrawn svg/Highlights-by-Outdraw-Design/12_Doodles/Doodle 5.svg"
                alt="Rocket"
                width={60}
                height={60}
                className="w-14 h-14 [filter:brightness(0)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              <p>
                Ikke kast bort tid og penger på et produkt ingen vil ha.
                <br />
                Test din idé i markedet på rekordtid.{" "}
                <span className="relative inline-flex items-center">
                  <span className="font-schoolbell text-2xl font-bold">
                    Til fastpris
                  </span>
                  <Image
                    src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 3.svg"
                    alt=""
                    width={100}
                    height={4}
                    className="absolute -bottom-1 left-0 w-full [filter:brightness(0)]"
                  />
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 font-light tracking-wide w-full sm:w-auto text-lg px-8 relative group"
            >
              Book et møte
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="relative">
              <Button
                size="lg"
                variant="outline"
                className="font-light tracking-wide text-foreground w-full sm:w-auto text-lg px-8 relative group border-2 border-black"
              >
                Se prosessen
              </Button>
              {/* <Image
                  src="/images/handrawn svg/Highlights-by-Outdraw-Design/01_Arrows/Arrow 11.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="absolute -bottom-48 right-0 transform rotate-12 [filter:brightness(0)]"
                 /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
