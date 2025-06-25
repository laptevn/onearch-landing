import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is OneArch for?",
    answer: "OneArch is built for software architects, tech leads, and anyone responsible for architectural decision-making in software projects. Whether you’re a solo consultant or part of an enterprise team, it helps you stay organized and intentional.",
  },
  {
    question: "What makes OneArch different from tools like Confluence or Notion?",
    answer: "Unlike general-purpose documentation tools, OneArch is purpose-built for software architecture. It structures architectural decisions (ADRs), tracks changes, verifies requirements with AI, and guides you through a concrete architecture process.",
  },
  {
    question: "How does the AI assistant help?",
    answer: "The AI assistant reviews your requirements and ADRs, detects inconsistencies, highlights unclear parts, and suggests improvements. It helps reduce errors and increase clarity before implementation begins.",
  },
  {
    question: "Can I use OneArch with my existing architecture tools?",
    answer: "Right now, OneArch works as a standalone system.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes. Your data is securely stored and isolated. No one can access your artifacts without your permission. We're committed to building enterprise-grade security from day one.",
  },
  {
    question: "What does the MVP include?",
    answer: "The MVP includes two core features: collecting requirements and ADRs, and AI-powered enhancement of those artifacts. More features are coming soon.",
  },
  {
    question: "Is OneArch free to use?",
    answer: "Yes, the MVP is currently free. We’ll offer paid plans with collaboration and export features later on.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-12 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}