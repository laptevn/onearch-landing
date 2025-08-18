"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Here’s what early users are saying
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-0 shadow-lg">
              <CardContent className="p-6">
                <blockquote className="text-lg text-muted-foreground mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                    data-ai-hint={testimonial.hint}
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
