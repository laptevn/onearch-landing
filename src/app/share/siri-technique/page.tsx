
import { Brain, Repeat, Lightbulb, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PromoPopup from "@/components/share/promo-popup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear and Concise Statements with the SIRI Technique",
  description: "Learn how to express your thoughts concisely and focus on what matters using the SIRI technique: Simplify, Internalize, Repeat, Iterate.",
  alternates: {
    canonical: "/share/siri-technique",
  },
};

const siriSteps = [
    {
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        title: "S – Simplify",
        description: "Make it simpler.",
    },
    {
        icon: <Brain className="w-8 h-8 text-primary" />,
        title: "I – Internalize",
        description: "Visualize it in your mind.",
    },
    {
        icon: <Repeat className="w-8 h-8 text-primary" />,
        title: "R – Repeat",
        description: "Rephrase it in your own words.",
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-primary" />,
        title: "I – Iterate",
        description: "Repeat SIRI if the interpretation isn’t fully accurate.",
    }
];

export default function SiriTechniquePage() {
    return (
        <div className="relative">
            <PromoPopup />
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Clear and Concise Statements
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        How to express your thoughts concisely and focus on what matters? Use the SIRI technique.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {siriSteps.map((step, index) => (
                        <Card key={index} className="bg-card/50 border-0 shadow-lg flex flex-col text-center">
                            <CardHeader className="items-center">
                                {step.icon}
                                <CardTitle className="pt-4">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16 max-w-3xl mx-auto">
                    <p className="text-xl text-muted-foreground">
                        Apply SIRI to any speech or article to extract a clear and concise idea.
                    </p>
                </div>
            </div>
        </div>
    );
}
