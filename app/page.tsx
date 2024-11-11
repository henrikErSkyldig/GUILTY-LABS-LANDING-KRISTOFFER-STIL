"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  RocketIcon,
  LightbulbIcon,
  TrendingUpIcon,
  CheckIcon,
  ArrowRightIcon,
  TargetIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SectionTitle,
  SectionSubtitle,
  SectionParagraph,
  GridContainer,
  GridItem,
  Section,
} from "@/components/atoms";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { TargetAudienceSection } from "@/components/sections/target-audience-section";
import { ProcessSection } from "@/components/sections/process-section";
import { EarlyCasesSection } from "@/components/sections/early-cases-section";
import { Footer } from "@/components/sections/footer";
import { FAQSection } from "@/components/sections/faq";
import ProcessSectionV2 from "@/components/sections/process-sectionv2";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { LabsConceptSection } from "@/components/sections/labs-concept-section";

const CriteriaSection = () => (
  <Section className="bg-white">
    <SectionTitle>Er Labs riktig for deg?</SectionTitle>
    <GridContainer cols="sm:grid-cols-2 gap-16">
      {[
        {
          icon: LightbulbIcon,
          title: "Du har en klar idé",
          description:
            "Du vet hvilket problem du vil løse og har en idé om hvordan. Du trenger ikke ha alle detaljene, men du bør kunne forklare hovedtrekkene på 30 sekunder.",
        },
        {
          icon: RocketIcon,
          title: "Du er klar for raske resultater",
          description:
            "Du forstår verdien av å komme raskt ut i markedet. Du er villig til å starte enkelt og bygge videre basert på tilbakemeldinger fra virkelige brukere.",
        },
        {
          icon: TrendingUpIcon,
          title: "Du er åpen for å bli utfordret og lære",
          description:
            "Du ser på din MVP som et eksperiment. Du er klar for å lære, tilpasse deg og kanskje til og med endre kurs basert på det du oppdager underveis.",
        },
        {
          icon: TargetIcon,
          title: "Du har et marked i tankene",
          description:
            "Du har en idé om hvem kundene dine er og hvorfor de trenger produktet ditt. Du trenger ikke en fullstendig markedsanalyse, bare en god magefølelse.",
        },
      ].map((criteria, index) => (
        <GridItem key={index}>
          <div className="flex items-start space-x-4">
            <criteria.icon className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <SectionSubtitle>{criteria.title}</SectionSubtitle>
              <p className="text-base font-light text-muted-foreground">
                {criteria.description}
              </p>
            </div>
          </div>
        </GridItem>
      ))}
    </GridContainer>
  </Section>
);

const ConceptsSection = () => (
  <Section className="bg-muted/10">
    <SectionTitle>Hva kan vi hjelpe deg med?</SectionTitle>
    <GridContainer cols="md:grid-cols-2 gap-16">
      <div>
        <SectionSubtitle>Dette er vår greie</SectionSubtitle>
        <ul className="space-y-4">
          {[
            "Mobilapper som løser hverdagsproblemer",
            "Nettbaserte plattformer og markedsplasser",
            "SaaS-løsninger for bedrifter",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
              <span className="text-base font-light text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SectionSubtitle>Dette er ikke vår greie</SectionSubtitle>
        <ul className="space-y-4">
          {[
            "Fysiske produkter eller hardware",
            "Gambling eller kryptovaluta-prosjekter",
            "Ideer uten klar målgruppe eller behov",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <ArrowRightIcon className="h-6 w-6 text-foreground mr-4 flex-shrink-0" />
              <span className="text-base font-light text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </GridContainer>
  </Section>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ola Nordmann",
      title: "CEO, ABC Startup",
      quote:
        "Guilty Labs har virkelig hjulpet oss med å utvikle vårt digitale produkt på rekordtid. Deres tiln��rming sparte oss for både tid og penger.",
    },
    {
      name: "Kari Hansen",
      title: "Founder, XYZ Tech",
      quote:
        "Samarbeidet med Guilty Labs var en game-changer for oss. De forstod våre behov og leverte en MVP som overgikk våre forventninger.",
    },
    {
      name: "Per Olsen",
      title: "CTO, 123 Solutions",
      quote:
        "Deres ekspertise innen lean startup-metodikk var uvurderlig. Vi fikk validert vår idé raskt og kunne justere kursen basert på faktiske data.",
    },
  ];

  return (
    <Section className="bg-white">
      <SectionTitle>Hva våre kunder sier</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-4">
            <p className="text-lg font-light italic text-muted-foreground">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="font-normal text-foreground">{testimonial.name}</p>
              <p className="text-sm font-light text-muted-foreground">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CTASection = () => (
  <Section className="bg-primary/5">
    <div className="text-center">
      <h2 className="text-5xl text-foreground mb-6">
        Gira på å finne ut om ideen din har potensiale?
      </h2>
      <p className="text-xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto">
        Start din 6-ukers reise mot en fungerende MVP i dag! Book et gratis
        20-minutters møte med Kristian eller Morten.
      </p>
      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-light tracking-wide"
      >
        Book et møte
        <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </Section>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <TargetAudienceSection />
        <ProcessSectionV2 />
        <ProcessSection />
        <ExpertiseSection />

        <LabsConceptSection />
        <CriteriaSection />
        <ConceptsSection />
        <EarlyCasesSection />
        <TestimonialSection />

        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
