import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FileCheck,
  Share,
  ShieldCheck,
  ListChecks,
  PencilRuler,
  ListOrdered,
} from "lucide-react";

const benefits = [
  {
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    title: "Context-Aware Decision Making",
    description:
      "Standardize your decisions with a proven Architectural Decision Record format. With context-aware decision making, requirements and other ADRs are displayed in-place while you work. You can also share your ADRs with colleagues as images.",
  },
  {
    icon: <ListChecks className="w-8 h-8 text-primary" />,
    title: "Smart Requirement Management",
    description:
      "OneArch uses smart techniques to improve the quality of requirements and speed up the process of requirements gathering.",
  },
  {
    icon: <ListOrdered className="w-8 h-8 text-primary" />,
    title: "Step-by-Step Project Wizard",
    description:
      "Simplify onboarding and guide junior architects with our step-by-step project creation wizard. Ensures a structured process from start to finish.",
  },
  {
    icon: <PencilRuler className="w-8 h-8 text-primary" />,
    title: "Built-in & Attachable Diagrams",
    description:
      "Draw diagrams right inside OneArch to keep everything in one place, or attach files from your favorite diagramming tools. The choice is yours.",
  },
  {
    icon: <Share className="w-8 h-8 text-primary" />,
    title: "Export to Word, Confluence and HTML",
    description:
      "Seamlessly share your architectural artifacts with stakeholders in popular formats.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Data is encrypted at rest",
    description:
      "Your sensitive architectural data is secured using industry-standard at-rest encryption.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need, and More
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the additional benefits that make OneArch the right choice
            for serious architects.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card/50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
            >
              <CardHeader className="flex flex-col">
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription className="pt-2 flex-grow">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
