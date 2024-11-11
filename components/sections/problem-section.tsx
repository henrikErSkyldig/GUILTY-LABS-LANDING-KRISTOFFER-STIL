"use client";

import React from "react";
import { Section, SectionTitle } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hourglass, Target, Coins, Code2 } from "lucide-react";

interface Problem {
  title: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
}

export function ProblemSection() {
  const problems: Problem[] = [
    {
      title: "Lang tid fra idé til lansering",
      description:
        "Tradisjonell utvikling tar ofte 6-12 måneder. I dagens marked er det for lenge å vente - du risikerer at noen andre lanserer før deg, eller at markedet endrer seg.",
      delay: 0,
      icon: <Hourglass className="w-6 h-6 text-primary" />,
    },
    {
      title: "Høye utviklingskostnader",
      description:
        "Mange bruker millioner på utvikling før de vet om noen vil betale for produktet. Vi mener det er bedre å teste med en MVP først.",
      delay: 0.2,
      icon: <Coins className="w-6 h-6 text-primary" />,
    },
    {
      title: "Overengineering",
      description:
        "Det er lett å bli fanget i perfeksjonisme og bygge funksjoner ingen trenger. Vi hjelper deg fokusere på det som faktisk skaper verdi for kundene dine.",
      delay: 0.4,
      icon: <Code2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Manglende markedsvalidering",
      description:
        "Mange bygger i blinde uten å vite om det finnes et marked. Med vår 6-ukers prosess får du raskt bekreftet om ideen din har potensiale.",
      delay: 0.6,
      icon: <Target className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-16">
          <SectionTitle>Problemet vi løser</SectionTitle>
          <Image
            src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 2.svg"
            alt=""
            width={300}
            height={20}
            className="absolute -bottom-4 left-0 w-[200px] [filter:brightness(0)]"
          />
          <p className="text-xl font-light text-muted-foreground mt-8 max-w-2xl">
            Altfor mange gründere og bedrifter kaster bort tid og penger på å
            bygge produkter ingen vil ha. Vi har en bedre måte.
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <Image
            src="/images/handrawn svg/Highlights-by-Outdraw-Design/12_Doodles/Doodle 2.svg"
            alt=""
            width={80}
            height={80}
            className="absolute -top-10 -right-10 w-20 h-20 [filter:brightness(0)] opacity-10"
          />

          <div className="space-y-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: problem.delay }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 
                                group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="relative inline-block">
                      <h3 className="text-2xl font-normal mb-3">
                        {problem.title}
                      </h3>
                      <Image
                        src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 3.svg"
                        alt=""
                        width={100}
                        height={10}
                        className="absolute -bottom-2 left-0 w-[80px] [filter:brightness(0)] opacity-10 
                                 group-hover:opacity-20 transition-opacity duration-300"
                      />
                    </div>
                    <p className="text-lg font-light text-muted-foreground max-w-2xl">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {index < problems.length - 1 && (
                  <div className="relative h-12 ml-6 mt-2">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <Image
            src="/images/handrawn svg/Highlights-by-Outdraw-Design/12_Doodles/Doodle 4.svg"
            alt=""
            width={80}
            height={80}
            className="absolute -bottom-10 -left-10 w-20 h-20 [filter:brightness(0)] opacity-10"
          />
        </div>
      </div>
    </Section>
  );
}
