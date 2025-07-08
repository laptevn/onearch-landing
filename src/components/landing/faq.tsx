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
    answer: "Unlike general-purpose documentation tools, OneArch is purpose-built for software architecture. This specialization is what makes it so productive: it guides you through a concrete architectural process with structured tooling and AI assistance, saving you from wrestling with generic templates and scattered information.",
  },
  {
    question: "Can I use OneArch with my existing architecture tools?",
    answer: "OneArch is designed to be a highly efficient, single place for all your architectural artifacts. To help you integrate with existing processes, it supports exporting to various formats.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes. Your data is securely stored and isolated. No one can access your artifacts without your permission. We're committed to building enterprise-grade security from day one.",
  },
  {
    question: "Is OneArch free to use?",
    answer: "Yes, the MVP is currently free.",
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
