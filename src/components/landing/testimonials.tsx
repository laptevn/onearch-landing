"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Francisco Exposito",
    title: "Application Architect, European External Action Service",
    quote:
      "I’m impressed by how structured and easy to review the data is. The clean, distraction-free UI and AI integration make it intuitive, and the diagram feature is a great bonus. OneArch is a promising tool - simple, elegant, and clearly built with care.",
    image: "/francisco.jpeg",
    hint: "man portrait",
  },
  {
    name: "Max Pshenichnikov",
    title: "Chief Architect, Dom.RF",
    quote:
      "I love the idea of a context-aware assistant built right into the interface. Unlike rigid chat UIs, OneArch feels like a smart mini-agent that even processes the content I enter into forms.",
    image: "/max.jpeg",
    hint: "man portrait",
  },
  {
    name: "Amal Khasanbaev",
    title: "Fullstack Engineer, SK-Auto",
    quote:
      "OneArch is very convenient, especially the Review feature. Even though I’m not yet an architect, it helps me document my work and track the history of decisions as I grow into the role.",
    image: "/amal.jpeg",
    hint: "man portrait",
  }
];

// This is a fixed width used only for calculation, not for styling the cards.
const CARD_WIDTH_FOR_CALCULATION = 550; // px

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateVisibleItems = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newVisibleItems = Math.max(1, Math.floor(containerWidth / CARD_WIDTH_FOR_CALCULATION));
      setVisibleItems(newVisibleItems);
      if (currentIndex + newVisibleItems > testimonials.length) {
        setCurrentIndex(Math.max(0, testimonials.length - newVisibleItems));
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateVisibleItems();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    updateVisibleItems();

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [updateVisibleItems]);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - visibleItems));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(testimonials.length - visibleItems, prevIndex + visibleItems));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + visibleItems < testimonials.length;

  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Here’s what early users are saying
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / visibleItems) * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4" style={{ flexBasis: `${100 / visibleItems}%`}}>
                  <div className="flex flex-col items-center text-center lg:flex-row lg:text-left gap-6 h-full">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}`}
                      width={88}
                      height={88}
                      className="h-24 w-24 rounded-full object-cover flex-shrink-0"
                      data-ai-hint={testimonial.hint}
                    />
                    <div className="relative w-full">
                      <div className="absolute -top-3 left-1/2 lg:left-[-12px] lg:top-8 transform -translate-x-1/2 lg:-translate-y-1/2 rotate-45 lg:-rotate-45 w-6 h-6 bg-card/50"></div>
                      <div className="bg-card/50 p-6 rounded-2xl shadow-lg relative h-full">
                        <blockquote className="text-lg text-muted-foreground mb-4">
                          {testimonial.quote}
                        </blockquote>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {testimonials.length > visibleItems && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 left-0 z-10 rounded-full disabled:opacity-50"
                onClick={handlePrev}
                disabled={!canGoPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 right-0 z-10 rounded-full disabled:opacity-50"
                onClick={handleNext}
                disabled={!canGoNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
