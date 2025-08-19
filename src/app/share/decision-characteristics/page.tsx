
import { CheckCircle, XCircle, Star, Target, FileText, Sparkles, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PromoPopup from "@/components/share/promo-popup";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Characteristics of an Architectural Decision",
  description: "Learn about the key characteristics of a high-quality architectural decision: it must be important, technical, decisive, objective, and clear.",
  alternates: {
    canonical: "/share/decision-characteristics",
  },
};

const characteristics = [
    {
        icon: <Star className="w-8 h-8 text-primary" />,
        title: "Important",
        description: "In the absence of an architect, developers will make decisions themselves. An architect is needed to solve the most important problems — there are others who can handle the rest.",
        examples: [
            { text: "Which database to use?", valid: true },
            { text: "Where to deploy the application?", valid: true },
            { text: "Which unit testing framework to choose?", valid: false },
            { text: "Which IDE to use?", valid: false },
        ]
    },
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: "Technical",
        description: "An architect should focus on technical challenges — even though they occasionally need to dip into other domains. But those other domains have their own experts.",
    },
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "Decisive",
        description: "It must be clear what decision is made and why. Saying “If we use X, we gain performance but increase maintenance cost; if we use Y, we lose performance but reduce maintenance cost” — is not a decision. It’s unclear what to do with that.",
    },
    {
        icon: <Scale className="w-8 h-8 text-primary" />,
        title: "Objective",
        description: "A decision should be based on facts, not personal opinions — no matter how much experience you have.",
    },
    {
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        title: "Clear",
        description: <>A decision should contain zero fluff and minimal text, while clearly conveying the meaning. Otherwise, it’s hard to understand and even harder to work with. Consider using the <Link href="/share/siri-technique" className="text-primary hover:underline">SIRI technique</Link>.</>,
    }
];

export default function DecisionCharacteristicsPage() {
    return (
        <div className="relative">
            <PromoPopup />
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Characteristics of an Architectural Decision
                    </h1>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {characteristics.map((char, index) => (
                        <Card key={index} className="bg-card/50 border-0 shadow-lg flex flex-col">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    {char.icon}
                                    <CardTitle>{char.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow gap-4">
                                <p className="text-muted-foreground">{char.description}</p>
                                {char.examples && (
                                    <div className="space-y-2">
                                        {char.examples.map((example, i) => (
                                            <div key={i} className="flex items-center gap-2 text-muted-foreground">
                                                {example.valid ? <CheckCircle className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                                                <span>{example.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
