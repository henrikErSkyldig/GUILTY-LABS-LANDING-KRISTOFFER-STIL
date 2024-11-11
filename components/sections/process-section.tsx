"use client";

import React from "react";
import { Section } from "@/components/atoms";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  week: number;
  icon: React.ReactNode;
}

export function ProcessSection() {
  const steps: Step[] = [
    {
      title: "Forberedelser",
      description: "Oppstartsmøte og prioritering",
      week: 1,
      icon: (
        <Image
          src="/images/handrawn svg/lightbulb-svgrepo-com.svg"
          alt=""
          width={40}
          height={40}
          className="w-12 h-12 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Design",
      description: "Prototyping og iterativ utvikling",
      week: 2,
      icon: (
        <Image
          src="/images/handrawn svg/yinyang-svgrepo-com.svg"
          alt=""
          width={40}
          height={40}
          className="w-12 h-12 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Utvikling",
      description: "Bygging av kjernefunksjonalitet",
      week: 3,
      icon: (
        <Image
          src="/images/handrawn svg/playing-with-building-blocks-svgrepo-com.svg"
          alt=""
          width={40}
          height={40}
          className="w-12 h-12 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Testing",
      description: "Produktpolering og brukerinvolvering",
      week: 4,
      icon: (
        <Image
          src="/images/handrawn svg/puzzle-svgrepo-com.svg"
          alt=""
          width={40}
          height={40}
          className="w-12 h-12 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Lansering",
      description: "Siste forberedelser og oppsett",
      week: 5,
      icon: (
        <Image
          src="/images/handrawn svg/browser-svgrepo-com.svg"
          alt=""
          width={40}
          height={40}
          className="w-12 h-12 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Evaluering",
      description: "Vurdering og videre planlegging",
      week: 6,
      icon: (
        <Image
          src="/images/handrawn svg/replay-svgrepo-com.svg"
          alt=""
          width={40}
          height={40}
          className="w-12 h-12 [filter:brightness(0)]"
        />
      ),
    },
  ];

  return (
    <Section className="bg-white">
      {/* Title remains the same */}
      <div className="text-center mb-24 pb-4 relative">
        <h2 className="text-4xl font-bold">Vår prosess på 6 uker</h2>
        <Image
          src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 2.svg"
          alt=""
          width={300}
          height={20}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 [filter:brightness(0)]"
        />
      </div>

      <div className="mt-16 overflow-x-auto px-4">
        <div className="min-w-[800px] relative">
          {/* Week numbers row with thin line underneath */}
          <div className="grid grid-cols-6 gap-0">
            {steps.map((step) => (
              <div
                key={step.week}
                className="text-center relative px-6 py-4 border-r border-gray-200 last:border-r-0"
              >
                <div className="font-schoolbell text-2xl font-bold">
                  Uke {step.week}
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal line under week numbers */}
          <div className="w-full h-px bg-gray-200" />

          {/* Content grid */}
          <div className="grid grid-cols-6 gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative min-h-[250px] px-6 py-8 text-center flex flex-col items-center border-r border-gray-200 last:border-r-0"
              >
                {/* Icon container */}
                <div className="h-[80px] flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                {/* Text content */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
