"use client";
"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle, Section } from "@/components/atoms";

const faqs = [
  {
    question: "Hva er egentlig en MVP?",
    answer:
      "En MVP (Minimum Viable Product) er den enkleste versjonen av produktet ditt som løser hovedproblemet for kundene dine. Det er en smart måte å teste ideen din i markedet uten å bruke for mye tid og penger.",
  },
  {
    question: "Hvorfor akkurat 6 uker?",
    answer:
      "6 uker er nok tid til å bygge noe verdifullt, men kort nok til å holde fokus og unngå unødvendig kompleksitet. Det gir deg muligheten til å få tilbakemeldinger fra ekte brukere raskt.",
  },
  {
    question: "Hva hvis ideen min endrer seg underveis?",
    answer:
      "Det er helt normalt! Vår prosess er fleksibel, og vi kan tilpasse oss endringer underveis. Målet er å lære og forbedre, så vi hjelper deg å justere produktet basert på nye innsikter.",
  },
  {
    question: "Hva skjer etter de 6 ukene?",
    answer:
      "Etter 6 uker har du en fungerende MVP klar for testing i markedet. Vi kan enten fortsette utviklingen, gjøre justeringer, eller hjelpe deg med å skalere basert på resultatene.",
  },
  {
    question: "Hvor mye koster det?",
    answer:
      "Prisen starter på 150 000 kr for en 6-ukers MVP-utvikling. Dette er en fast pris som inkluderer alt fra planlegging til lansering, uten skjulte kostnader.",
  },
  {
    question: "Hva hvis jeg ikke er teknisk selv?",
    answer:
      "Ingen problem! Vi snakker ditt språk, ikke teknisk sjargong. Vi guider deg gjennom hele prosessen og forklarer alt på en mte som gir mening for deg, uansett teknisk bakgrunn.",
  },
];

export function FAQSection() {
  return (
    <Section className="bg-muted/10">
      <Section className="bg-muted/10">
        <SectionTitle>Vanlige spørsmål</SectionTitle>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-t border-foreground/10 last:border-b"
            >
              <AccordionTrigger className="text-lg font-normal py-6 text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-light pb-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </Section>
  );
}
