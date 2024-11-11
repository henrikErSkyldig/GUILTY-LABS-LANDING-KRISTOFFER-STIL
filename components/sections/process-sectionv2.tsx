"use client";

import React from "react";
import { Section } from "@/components/atoms";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  startWeek: number;
  duration: number;
  icon: React.ReactNode;
}

export default function ProcessSectionV2() {
  const steps: Step[] = [
    {
      title: "Forberedelser",
      description: "Oppstartsmøte og prioritering",
      startWeek: 1,
      duration: 1,
      icon: (
        <Image
          src="/images/handrawn svg/lightbulb-svgrepo-com.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Design",
      description: "Prototyping og iterativ utvikling",
      startWeek: 2,
      duration: 2,
      icon: (
        <Image
          src="/images/handrawn svg/yinyang-svgrepo-com.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Utvikling",
      description: "Bygging av kjernefunksjonalitet",
      startWeek: 4,
      duration: 2,
      icon: (
        <Image
          src="/images/handrawn svg/playing-with-building-blocks-svgrepo-com.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Testing",
      description: "Produktpolering og brukerinvolvering",
      startWeek: 5,
      duration: 1,
      icon: (
        <Image
          src="/images/handrawn svg/puzzle-svgrepo-com.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 [filter:brightness(0)]"
        />
      ),
    },
    {
      title: "Lansering",
      description: "Siste forberedelser og oppsett",
      startWeek: 6,
      duration: 1,
      icon: (
        <Image
          src="/images/handrawn svg/browser-svgrepo-com.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 [filter:brightness(0)]"
        />
      ),
    },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-12 pb-4 relative">
        <h2 className="text-4xl font-bold">Vår prosess på 6 uker</h2>
        <Image
          src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 2.svg"
          alt=""
          width={300}
          height={20}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 [filter:brightness(0)]"
        />
      </div>

      <div className="mt-8">
        {/* Desktop version */}
        <div className="hidden lg:block overflow-x-auto pb-6">
          <div className="min-w-[768px] w-full relative">
            {/* Week numbers */}
            <div className="grid grid-cols-6 relative z-10 bg-gray-50/50">
              {[1, 2, 3, 4, 5, 6].map((week, idx) => (
                <div
                  key={week}
                  className={cn(
                    "py-4",
                    "border-l border-gray-200",
                    idx === 5 && "border-r"
                  )}
                >
                  <div className="font-schoolbell text-lg font-bold text-center px-4 mx-auto max-w-[120px]">
                    Uke {week}
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal divider */}
            <div className="w-full h-px bg-gray-200" />

            {/* Grid lines for content */}
            <div className="absolute inset-0 top-[40px] pointer-events-none bg-gray-50/30 ">
              <div className="absolute inset-0 grid grid-cols-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className={cn(
                      "h-full border-l border-gray-200/70",
                      i === 5 && "border-r"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Timeline content */}
            <div className="relative z-10 space-y-4 py-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    className={cn(
                      "bg-white",
                      "shadow-sm border border-gray-200",
                      "hover:shadow-md transition-all duration-300",
                      "hover:border-primary/20 rounded-lg",
                      "relative z-10",
                      "px-4 py-4"
                    )}
                    style={{
                      marginLeft: `calc(${
                        (step.startWeek - 1) * (100 / 6)
                      }% + 0px)`,
                      width: `calc(${(step.duration * 100) / 6}%)`,
                    }}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 pt-0.5">
                        <div className="w-6 h-6">{step.icon}</div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-foreground mb-0.5 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-snug">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative pt-3">
              {/* Week badge */}
              <div
                className={cn(
                  "absolute -top-2.5 left-3",
                  "bg-white px-2.5 py-0.5",
                  "rounded-full border border-gray-200/80",
                  "shadow-sm z-10"
                )}
              >
                <span className="font-schoolbell text-base font-bold">
                  {step.duration > 1 ? (
                    <>
                      Uke {step.startWeek}-{step.startWeek + step.duration - 1}
                    </>
                  ) : (
                    <>Uke {step.startWeek}</>
                  )}
                </span>
              </div>

              <div
                className={cn(
                  "bg-white rounded-lg",
                  "shadow-sm border border-gray-200/80",
                  "hover:shadow-md transition-all duration-300",
                  "relative",
                  "px-3 py-3",
                  "mt-0"
                )}
              >
                <div className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 pt-0.5">
                    <div className="w-5 h-5">{step.icon}</div>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-sm font-medium mb-0.5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-1/2 bottom-0 w-px h-4 bg-gray-200/80 transform translate-y-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
