import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileMinus, LayoutTemplate, Puzzle, Archive, HelpCircle, ClipboardX } from "lucide-react";

const problems = [
  {
    icon: <FileMinus className="w-8 h-8 text-primary" />,
    title: "Chaotic Documentation",
    description: "Architectural decisions are rarely documented – and when they are, it's usually chaotic.",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "Inconsistent Diagrams",
    description: "Diagrams vary in style and complexity, making alignment nearly impossible.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    title: "Scattered Decisions",
    description: "Decisions are scattered across tools and chats – they get lost.",
  },
  {
    icon: <Archive className="w-8 h-8 text-primary" />,
    title: "Lost Knowledge",
    description: "Reusing old knowledge? Good luck finding and understanding it.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-primary" />,
    title: "No Clear Path",
    description: "Junior architects struggle to form architectures – there's no clear path.",
  },
  {
    icon: <ClipboardX className="w-8 h-8 text-primary" />,
    title: "Vague Requirements",
    description: "Requirements are vague, inconsistent, or just plain wrong.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tired of Architectural Chaos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If you're a software architect, these problems probably sound familiar. OneArch is designed to solve them.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card/50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{problem.icon}</div>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription className="pt-2">{problem.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
