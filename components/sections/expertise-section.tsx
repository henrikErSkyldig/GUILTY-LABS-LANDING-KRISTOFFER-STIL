"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section, SectionTitle } from "@/components/atoms";

interface ApproachCard {
  title: string;
  description: string;
  number: number;
  delay: number;
}

export function ExpertiseSection() {
  const approachCards: ApproachCard[] = [
    {
      title: "9+ års erfaring",
      description:
        "Gjengen i Guilty har samarbeidet med kjente startups og store norske selskaper, og bygget opp en unik kompetanse i skjæringspunktet mellom innovasjon og etablert næringsliv.",
      number: 1,
      delay: 0.2,
    },
    {
      title: "Startup-mentalitet",
      description:
        "Lean metodikk og fokus på verdi. Vi jobber effektivt og målrettet. Vi har vært i dine sko og vet hva du trenger. Ingen fancy ord eller kronglete avtaler her.",
      number: 2,
      delay: 0.3,
    },
    {
      title: "Enterprise-kvalitet",
      description:
        "Vi gir deg en solid kodebase og skalerbar arkitektur fra dag én som enkelt kan bygges videre på når selskapet og ambisjonene vokser. ",
      number: 3,
      delay: 0.4,
    },
    {
      title: "Fast pris",
      description:
        "Du vet nøyaktig hva regningen blir. Ingen gjettelek med timepriser eller endeløse forhandlinger.",
      number: 4,
      delay: 0.5,
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-background to-muted/30">
      <div className="relative mb-16">
        <SectionTitle>Labs - Det beste fra to verdener</SectionTitle>
        <p className="text-xl font-light text-muted-foreground mt-8">
          Vårt unike konsept kombinerer oppstartsmindset og
          enterprise-ekspertise i en strømlinjeformet prosess for å utvikle
          MVP-er raskere enn noen gang.
        </p>
        <Image
          src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 2.svg"
          alt=""
          width={300}
          height={20}
          className="absolute -bottom-4 left-0 w-[200px] [filter:brightness(0)]"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-16">
        {approachCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.delay }}
            className="group"
          >
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-light flex-shrink-0 
                            group-hover:bg-primary/20 transition-all duration-300"
              >
                {card.number}
              </div>
              <div>
                <div className="relative inline-block">
                  <h3 className="text-2xl font-normal mb-3">{card.title}</h3>
                  <Image
                    src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 3.svg"
                    alt=""
                    width={100}
                    height={10}
                    className="absolute -bottom-2 left-0 w-[80px] [filter:brightness(0)] opacity-10 
                             group-hover:opacity-20 transition-opacity duration-300"
                  />
                </div>
                <p className="text-lg font-light text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <Image
        src="/images/handrawn svg/Highlights-by-Outdraw-Design/12_Doodles/Doodle 4.svg"
        alt=""
        width={80}
        height={80}
        className="absolute -bottom-10 -right-10 w-20 h-20 [filter:brightness(0)] opacity-10"
      />
    </Section>
  );
}
