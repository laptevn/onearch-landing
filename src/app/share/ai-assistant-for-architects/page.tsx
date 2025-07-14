
import { BrainCircuit, Bot, CheckCircle, Code, MessageSquare, Search, ShieldAlert, SlidersHorizontal, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PromoPopup from "@/components/share/promo-popup";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Assistant for Architects",
  description: "Learn which parts of software architecture work can be delegated to an AI assistant, from requirements clarification to verifying decisions.",
};

const points = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Requirements clarification?",
      canDelegate: true,
      description: "AI can ask clarifying questions, sanitize vague input, and even drive a discussion with stakeholders.",
      tools: "Used in practice: ChatGPT + Functional Requirements, Jasper for product teams, and built-in assistants in tools like Jira."
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8 text-primary" />,
      title: "Whiteboarding?",
      canDelegate: true,
      description: "AI can generate not only code — we already have tools that turn code into diagrams and vice versa.",
      tools: "Tools like: Uizard, Code2Flow, MermaidJS, Structurizr DSL."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "Consider alternative solutions?",
      canDelegate: true,
      description: "AI is trained on the entire internet — it can generate a wide spectrum of solution options.",
      tools: "Example: Try prompting ChatGPT or Claude for “10 ways to implement a pub/sub system”."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Answer complex technical questions?",
      canDelegate: true,
      description: "Easy peasy for AI.",
      tools: "Tools like: StackOverflow AI, GitHub Copilot, and Perplexity."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: "Verify if implemented architecture matches the planned one?",
        canDelegate: true,
        description: "AI can analyze code and compare it with architectural intents.",
        tools: "Example tool: CodeWhisperer, GPT-assisted code review in GitHub."
    },
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "Search hidden insights in the codebase?",
        canDelegate: true,
        description: "It’s bread and butter for AI.",
        tools: "Example: Sourcegraph Cody explores codebases with natural language."
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Verify quality of architectural decisions?",
      canDelegate: true,
      description: "AI isn't perfect here but quickly spots obvious issues — saving hours.",
      tools: "Practice: Just paste your ADR or architecture decision into ChatGPT with a prompt like: 'Can you challenge this decision? What assumptions are unsafe?'"
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-destructive" />,
      title: "Make complex technical decisions?",
      canDelegate: false,
      description: "No way AI can do this — and shouldn’t. AI can’t be responsible for decisions. You can even ask AI and it will tell you that. Remember: Responsibility = human.",
      tools: "You can describe anything as a “perfect solution” if you don’t care about consequences."
    }
  ];

export default function AiAssistantPage() {
    return (
        <div className="relative">
            <PromoPopup />
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        AI Assistant for Architects
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Everyone in IT has an AI assistant. Hey, you forgot about architects. Let’s clarify which parts of architectural work can actually be delegated to AI 👇
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {points.map((point, index) => (
                        <Card key={index} className={cn("bg-card/50 border-0 shadow-lg flex flex-col", {
                          "lg:col-span-2 border-2 border-primary shadow-primary/20": !point.canDelegate,
                        })}>
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    {point.icon}
                                    <div className="flex-1">
                                      <CardTitle>{point.title}</CardTitle>
                                      <p className={`font-semibold mt-1 ${point.canDelegate ? 'text-green-600' : 'text-red-600'}`}>
                                        {point.canDelegate ? "✅ Yes, delegate it" : "❌ No, own it"}
                                      </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow gap-4">
                                <div>
                                    <p className="text-muted-foreground">{point.description}</p>
                                </div>
                                {point.tools && (
                                    <div>
                                        <pre className="text-muted-foreground/80 text-sm whitespace-pre-wrap font-body bg-muted/50 p-3 rounded-md">{point.tools}</pre>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16 max-w-3xl mx-auto">
                    <p className="text-2xl font-semibold text-foreground">
                      Not bad at all. We’re left with the most interesting part — making decisions and owning them.
                    </p>
                    <p className="mt-4 text-xl text-muted-foreground">
                       🚀 OneArch delegates everything it can to AI, leaving architects with the most valuable, impactful, and fun work.
                    </p>
                </div>
            </div>
        </div>
    );
}
