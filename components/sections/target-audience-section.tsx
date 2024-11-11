"use client";

import React from "react";
import { Section, SectionTitle } from "@/components/atoms";
import Image from "next/image";

interface Audience {
  title: string;
  points: string[];
}

export function TargetAudienceSection() {
  const audiences: Audience[] = [
    {
      title: "For startups og gründere",
      points: [
        "Rask MVP-utvikling tilpasset stramme budsjetter",
        "Øk sjansene for å skaffe finansiering",
        "Fleksibel tilnærming for raske pivoteringer",
        "Validér ideen din raskt og effektivt",
      ],
    },
    {
      title: "For etablerte selskaper",
      points: [
        "Effektiv utvikling av innovative konsepter",
        "Minimér risiko med rask markedsvalidering",
        "Integrerbar teknologi med eksisterende systemer",
        "Innovér raskere med lean metodikk",
      ],
    },
  ];

  // Function to get the appropriate icon based on index
  const getIcon = (index: number) => {
    if (index === 0) {
      return "/images/handrawn svg/unicorn-svgrepo-com.svg"; // Rocket-like arrow for startups
    }
    return "/images/handrawn svg/mammoth-svgrepo-com.svg"; // More structured arrow for established companies
  };

  return (
    <Section className="bg-white">
      <div className="text-center mb-16 pb-4 relative">
        <h2 className="text-4xl font-bold">
          Skreddersydd for de som tørr å satse
        </h2>
        <Image
          src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 2.svg"
          alt=""
          width={300}
          height={20}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 [filter:brightness(0)]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16 relative">
        {/* Hand-drawn divider between columns */}
        <div
          className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-black opacity-10 transform -translate-x-1/2"
          style={{
            maskImage:
              "url('/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline_7.svg')",
            WebkitMaskImage:
              "url('/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline_7.svg')",
          }}
        />

        {audiences.map((audience, index) => (
          <div key={index} className="space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              {/* Different hand-drawn icon for each type */}
              <Image
                src={getIcon(index)}
                alt=""
                width={60}
                height={60}
                className="w-16 h-16 [filter:brightness(0)]"
              />
              <div className="relative">
                <h3 className="text-2xl font-schoolbell ">{audience.title}</h3>
                <Image
                  src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 3.svg"
                  alt=""
                  width={200}
                  height={10}
                  className="absolute -bottom-2 left-0 w-full [filter:brightness(0)] opacity-20"
                />
              </div>
            </div>
            <ul className="space-y-4">
              {audience.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  {/* Hand-drawn checkmark */}
                  <Image
                    src="/images/handrawn svg/Highlights-by-Outdraw-Design/11_Punctuation/Punctuation 2.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 mr-3 flex-shrink-0 mt-1 [filter:brightness(0)]"
                  />
                  <span className="text-base font-light text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
