import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileCheck, History, List, BrainCircuit } from "lucide-react";

const benefits = [
  {
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    title: "Consistent ADR Format",
    description: "Standardize all your decisions with a consistent and proven Architectural Decision Record format.",
  },
  {
    icon: <History className="w-8 h-8 text-primary" />,
    title: "Trackable History",
    description: "Easily track the history of every change and decision, providing full transparency and context.",
  },
  {
    icon: <List className="w-8 h-8 text-primary" />,
    title: "Step-by-Step Guidance",
    description: "Our guided process helps you build out your architecture from requirements to final decisions.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI-Powered Review",
    description: "Get objective, AI-powered reviews of your deliverables to catch errors and inconsistencies.",
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
            Discover the additional benefits that make OneArch the right choice for serious architects.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription className="pt-2">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
