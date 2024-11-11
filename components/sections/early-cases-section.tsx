"use client";

import React from "react";
import { Section, SectionTitle, SectionParagraph } from "@/components/atoms";
import {
  Carousel,
  Card as AppleCard,
} from "@/components/ui/apple-cards-carousel";

interface ImpactMetric {
  value: string;
  unit: string;
  type: "positive" | "negative" | "neutral";
}

interface CaseItem {
  src: string;
  title: string;
  category: string;
  description: string;
  impact: ImpactMetric[];
}

function CasesCarousel({ cases }: { cases: Array<CaseItem> }) {
  return (
    <div className="w-full">
      <Carousel
        items={cases.map((caseItem, index) => (
          <AppleCard
            key={index}
            card={{
              ...caseItem,
              content: caseItem.description,
            }}
            index={index}
            layout={false}
          />
        ))}
      />
    </div>
  );
}

export function EarlyCasesSection() {
  const cases: Array<CaseItem> = [
    {
      src: "/images/case1.jpg",
      title: "Innovativ Mobilapp for Helsesektoren",
      category: "Helseteknologi",
      description:
        "Banebrytende app for enkel bestilling av legetimer og videokonsultasjoner.",
      impact: [
        {
          value: "200%",
          unit: "økning i pasientengasjement",
          type: "negative",
        },
        { value: "50%", unit: "reduksjon i ventetid", type: "positive" },
      ],
    },
    {
      src: "/images/case2.jpg",
      title: "E-handelsplattform for Lokale Produsenter",
      category: "E-handel",
      description:
        "Skreddersydd plattform som knytter lokale produsenter direkte til forbrukere.",
      impact: [
        { value: "500k", unit: "kr månedlig omsetning", type: "positive" },
        { value: "50+", unit: "aktive produsenter", type: "positive" },
      ],
    },
    {
      src: "/images/case3.jpg",
      title: "AI-drevet Analyseverktøy for Eiendomsmarkedet",
      category: "PropTech",
      description:
        "Avansert verktøy for å forutsi markedstrender og optimalisere prisstrategier.",
      impact: [
        { value: "15%", unit: "økning i salgspriser", type: "positive" },
        { value: "30%", unit: "raskere salg", type: "positive" },
      ],
    },
    {
      src: "/images/case4.jpg",
      title: "Sikkerhetsteknologi for Smart Homes",
      category: "Sikkerhet",
      description:
        "Avansert sikkerhetssystem for å sikre husholdninger mot uønskede inngrep.",
      impact: [
        { value: "15%", unit: "økning i salgspriser", type: "positive" },
        { value: "5%", unit: "økning i kostnader", type: "negative" },
      ],
    },
  ];

  return (
    <Section className="bg-muted/10">
      <SectionTitle>Tidlige caser</SectionTitle>
      <SectionParagraph>
        Se hvordan vi har hjulpet startups og innovative selskaper med å
        realisere sine ideer på rekordtid.
      </SectionParagraph>
      <CasesCarousel cases={cases} />
    </Section>
  );
}
