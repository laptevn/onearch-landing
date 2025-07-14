
import { BrainCircuit, Bot, CheckCircle, Code, MessageSquare, Search, ShieldAlert, SlidersHorizontal, UserCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PromoPopup from "@/components/share/promo-popup";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Assistant for Architects",
  description: "Learn which parts of software architecture work can be delegated to an AI assistant, from requirements clarification to verifying decisions.",
};

const LinkComponent = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{children}</Link>
);

const points = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Requirements clarification?",
      canDelegate: true,
      description: "AI can ask clarifying questions, sanitize vague input, and even drive a discussion with stakeholders.",
      tools: <><span>Used in practice: </span><LinkComponent href="/share/ba-techniques">ChatGPT + Functional Requirements</LinkComponent><span>, </span><LinkComponent href="https://www.jasper.ai/">Jasper for product teams</LinkComponent><span>, and built-in assistants in tools like </span><LinkComponent href="https://www.atlassian.com/software/jira/features/ai">Jira</LinkComponent><span>.</span></>
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8 text-primary" />,
      title: "Whiteboarding?",
      canDelegate: true,
      description: "AI can generate not only code — we already have tools that turn code into diagrams and vice versa.",
      tools: <><span>Tools like: </span><LinkComponent href="https://uizard.io/">Uizard</LinkComponent><span>, </span><LinkComponent href="https://github.com/scottrogowski/code2flow">Code2Flow</LinkComponent><span>, </span><LinkComponent href="https://mermaid.js.org/">MermaidJS</LinkComponent><span>, </span><LinkComponent href="https://structurizr.com/dsl">Structurizr DSL</LinkComponent><span>.</span></>
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "Consider alternative solutions?",
      canDelegate: true,
      description: "AI is trained on the entire internet — it can generate a wide spectrum of solution options.",
      tools: <><span>Example: Try prompting </span><LinkComponent href="https://chat.openai.com/">ChatGPT</LinkComponent><span> or </span><LinkComponent href="https://claude.ai/">Claude</LinkComponent><span> for “10 ways to implement a pub/sub system”.</span></>
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Answer complex technical questions?",
      canDelegate: true,
      description: "Easy peasy for AI.",
      tools: <><span>Tools like: </span><LinkComponent href="https://stackoverflow.ai/">StackOverflow AI</LinkComponent><span>, </span><LinkComponent href="https://github.com/features/copilot">GitHub Copilot</LinkComponent><span>, and </span><LinkComponent href="https://www.perplexity.ai">Perplexity</LinkComponent><span>.</span></>
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: "Verify if implemented architecture matches the planned one?",
        canDelegate: true,
        description: "AI can analyze code and compare it with architectural intents.",
        tools: <><span>Example tool: </span><LinkComponent href="https://aws.amazon.com/q/developer">CodeWhisperer</LinkComponent><span>, GPT-assisted code review in GitHub.</span></>
    },
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "Search hidden insights in the codebase?",
        canDelegate: true,
        description: "It’s bread and butter for AI.",
        tools: <><span>Example: </span><LinkComponent href="https://about.sourcegraph.com/cody">Sourcegraph Cody</LinkComponent><span> explores codebases with natural language.</span></>
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Verify quality of architectural decisions?",
      canDelegate: true,
      description: "AI isn't perfect here but quickly spots obvious issues — saving hours.",
      tools: <><span>Practice: Just paste your ADR or architecture decision into </span><LinkComponent href="https://chat.openai.com/">ChatGPT</LinkComponent><span> with a prompt like: 'Can you challenge this decision? What assumptions are unsafe?'</span></>
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
                                        <div className="text-muted-foreground/80 text-sm whitespace-pre-wrap font-body bg-muted/50 p-3 rounded-md">{point.tools}</div>
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
                       🚀 <LinkComponent href="https://theone.archi/">OneArch</LinkComponent> delegates everything it can to AI, leaving architects with the most valuable, impactful, and fun work.
                    </p>
                </div>
            </div>
        </div>
    );
}
