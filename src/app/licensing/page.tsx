
import { CheckCircle, XCircle, Lock, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licensing & Terms - OneArch",
  description: "Understand the licensing terms, data access commitments, and intellectual property rights for OneArch. Your data is yours, always.",
};

const commitmentPoints = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />,
    text: "If OneArch introduces paid plans in the future, you will always be able to access and export all your data (projects, ADRs, diagrams, requirements) — without paying.",
  },
  {
    icon: <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />,
    text: "No lock-in — you’ll never be blocked from retrieving your work or migrating elsewhere, even if you decide not to continue with a paid version.",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary flex-shrink-0" />,
    text: "You’ll have a clear option to leave with all your data fully intact, no tricks or restrictions.",
  },
];

export default function LicensingPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Licensing & Terms
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Clear, simple, and fair.
          </p>
        </div>

        <div className="space-y-8">
            <div className="p-8 rounded-lg border bg-card/50 shadow-lg">
                <p className="text-lg text-muted-foreground mb-4">
                    OneArch is currently completely free during early access, with all features available to everyone.
                </p>
                <p className="text-lg text-muted-foreground">
                    The product helps architects save time, make better decisions, and document architecture efficiently — and it's fair that, over time, it may become a paid product.
                </p>
            </div>

            <div className="p-8 rounded-lg border bg-card/50 shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6">That said, we make a clear commitment:</h2>
                <ul className="space-y-6">
                    {commitmentPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-4">
                            {point.icon}
                            <span className="text-muted-foreground text-lg">{point.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-8 rounded-lg border bg-card/50 shadow-lg">
                <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-2">Intellectual Property</h2>
                        <div className="text-lg text-muted-foreground space-y-4">
                          <p>
                            OneArch is the sole intellectual property of its creator (Nick/Nikolai Laptev).
                          </p>
                          <p>
                            Using the product during early access does not grant rights to reuse, reproduce, or redistribute any part of its interface, logic, or design.
                          </p>
                          <p>
                            You are welcome to explore and benefit from it — but the product itself remains protected.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
