"use client";

import React from "react";
import Balancer from "react-wrap-balancer";

export function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-5xl font-normal text-left mb-16 text-foreground ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl font-normal text-left mb-6 text-foreground">
      <Balancer>{children}</Balancer>
    </h3>
  );
}

export function SectionParagraph({ children }: { children: React.ReactNode }) {
  return (
    <Balancer>
      <p className="text-lg font-light mb-16 text-left max-w-3xl text-muted-foreground">
        {children}
      </p>
    </Balancer>
  );
}

export function GridContainer({
  children,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  children: React.ReactNode;
  cols?: string;
}) {
  return <div className={`grid ${cols} gap-12`}>{children}</div>;
}

export function GridItem({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
