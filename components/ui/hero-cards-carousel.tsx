"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type HeroCard = {
  title: string;
  category: string;
  image: string;
  description: string;
  company: {
    name: string;
    logo: string;
  };
  impact: {
    value: string;
    unit: string;
    type: "positive" | "negative" | "neutral";
  }[];
};

interface HeroCarouselProps {
  cards: HeroCard[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-6 py-4 overflow-x-auto snap-x snap-mandatory no-visible-scrollbar"
        style={{ scrollBehavior: "smooth" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <HeroCard
              {...card}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const HeroCard: React.FC<
  HeroCard & {
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
    onClick: () => void;
  }
> = ({
  title,
  category,
  image,
  description,
  company,
  impact,
  isActive,
  onHover,
  onLeave,
  onClick,
}) => (
  <motion.div
    className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group"
    whileHover={{ scale: 1.02, zIndex: 10 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    onHoverStart={onHover}
    onHoverEnd={onLeave}
  >
    {image ? (
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg transition-opacity duration-300"
      />
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg" />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 rounded-lg transition-opacity duration-300" />
    <div className="absolute inset-0 flex flex-col justify-between p-4">
      <div className="flex justify-between items-start">
        <p className="text-xs font-medium text-primary bg-black/70 px-2 py-1 rounded">
          {category}
        </p>
        <Image
          src={company.logo}
          alt={company.name}
          width={40}
          height={20}
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-200 mb-2 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {impact.map((metric, index) => (
            <Badge key={index} {...metric} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Badge: React.FC<{
  value: string;
  unit: string;
  type: "positive" | "negative" | "neutral";
}> = ({ value, unit, type }) => (
  <div
    className={cn(
      "px-2 py-1 rounded-full text-xs font-semibold flex items-center",
      type === "positive" && "bg-green-500/30 text-green-100",
      type === "negative" && "bg-red-500/30 text-red-100",
      type === "neutral" && "bg-blue-500/30 text-blue-100"
    )}
  >
    <span className="text-sm font-bold mr-1">{value}</span>
    <span className="text-xs">{unit}</span>
  </div>
);
