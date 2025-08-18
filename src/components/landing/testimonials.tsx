"use client";

import Image from "next/image";

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
        <div className="grid gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:flex-row lg:text-left gap-6">
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
                    <div className="bg-card/50 p-6 rounded-2xl shadow-lg relative">
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
          ))}
        </div>
      </div>
    </section>
  );
}
