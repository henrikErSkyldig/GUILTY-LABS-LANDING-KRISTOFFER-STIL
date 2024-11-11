"use client";

import React from "react";
import { Section, SectionTitle } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Target, Rocket, Sparkles } from "lucide-react";

interface TimelinePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

export function LabsConceptSection() {
  const timelinePoints: TimelinePoint[] = [
    {
      title: "Redusert risiko",
      description:
        "Istedenfor å bruke måneder eller år på utvikling, får du validert forretningsideen før du investerer mer tid og penger.",
      icon: <Target className="w-6 h-6 text-primary" />,
      delay: 0,
    },
    {
      title: "Rask validering",
      description:
        "På 6 uker går du fra idé til et fungerende produkt som kan testes på ekte kunder og vises frem til investorer.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      delay: 0.2,
    },
    {
      title: "Fokusert utvikling",
      description:
        "Unngå overengineering og hold kostnadene nede ved å fokusere på kjernefunksjonalitet som skaper verdi for kundene.",
      icon: <Clock className="w-6 h-6 text-primary" />,
      delay: 0.4,
    },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-16">
          <SectionTitle>Hvorfor 6 uker?</SectionTitle>
          <Image
            src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 2.svg"
            alt=""
            width={300}
            height={20}
            className="absolute -bottom-4 left-0 w-[200px] [filter:brightness(0)]"
          />
          <p className="text-xl font-light text-muted-foreground mt-8">
            Vår erfaring viser at 6 uker er den optimale tidsrammen for
            MVP-utvikling. Det er kort nok til å holde momentum og kostnader
            nede, men langt nok til å levere kvalitet som kan skaleres.
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

          <div className="space-y-8">
            {timelinePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: point.delay }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0
                                group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    {point.icon}
                  </div>
                  <div>
                    <div className="relative inline-block mb-2">
                      <h3 className="text-xl font-normal">{point.title}</h3>
                      <Image
                        src="/images/handrawn svg/Highlights-by-Outdraw-Design/02_Underlines/Underline 3.svg"
                        alt=""
                        width={100}
                        height={10}
                        className="absolute -bottom-2 left-0 w-[80px] [filter:brightness(0)] opacity-10 
                                 group-hover:opacity-20 transition-opacity duration-300"
                      />
                    </div>
                    <p className="text-base font-light text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>

                {index < timelinePoints.length - 1 && (
                  <div className="relative h-8 ml-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 p-6 rounded-lg border border-primary/10 bg-primary/5"
        >
          <p className="text-lg font-light text-muted-foreground">
            <span className="font-normal text-foreground">Bonus:</span> Etter 6
            uker har du ikke bare et produkt – du har verdifull innsikt i hva
            markedet faktisk vil ha. Perfekt utgangspunkt for videre utvikling
            eller pivot.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
