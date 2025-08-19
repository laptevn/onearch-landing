
import { Lock, Database, EyeOff, BrainCircuit, UserCheck, CheckCircle, Shield, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - OneArch",
  description: "Understand how OneArch handles your data, from authentication to AI usage. We prioritize your privacy and security.",
  alternates: {
    canonical: "/privacy",
  },
  robots: "index, follow",
};

const policyPoints = [
    {
        icon: <Lock className="w-8 h-8 text-primary flex-shrink-0" />,
        title: "Authentication & Identity",
        content: [
            "We use AWS Cognito for user authentication — a secure, industry-standard identity provider.",
            "The only information retrieved from Cognito is your email address, which is used to track product usage in PostHog.",
            "This helps us understand user activity patterns (e.g. returning users, feature usage), but we do not use email for marketing, profiling, or share it with third parties.",
        ],
    },
    {
        icon: <Database className="w-8 h-8 text-primary flex-shrink-0" />,
        title: "Your Data in the App",
        content: [
            "All your project data (requirements, ADRs, diagrams, etc.) is encrypted at rest using AWS-managed encryption.",
            "All communication within the app is secured via TLS (HTTPS).",
        ],
    },
    {
        icon: <EyeOff className="w-8 h-8 text-primary flex-shrink-0" />,
        title: "No Human Access",
        content: [
            "Your data belongs only to you.",
            "No human — including the product creator — accesses or reviews your in-app data under any circumstance.",
        ],
    },
    {
        icon: <BrainCircuit className="w-8 h-8 text-primary flex-shrink-0" />,
        title: "Use of AI",
        content: [
            "To enable smart assistance (e.g. requirement extraction, AI summaries), your input may be shared with OpenAI's API.",
            "This data is sent securely and anonymized.",
        ],
    },
    {
        icon: <UserCheck className="w-8 h-8 text-primary flex-shrink-0" />,
        title: "Ownership & Purpose",
        content: [
            "You are the sole owner of your data in OneArch.",
            "The app uses your data only to provide functionality — never for training AI, selling data, or third-party profiling.",
        ],
    },
    {
        icon: <Globe className="w-8 h-8 text-primary flex-shrink-0" />,
        title: "We do not collect or track your location",
        content: [
            "OneArch does not perform geo-blocking, and we do not restrict access based on where you are located.",
            "Your country of origin, residence, or political environment is not relevant to your right to use the product.",
            "We believe architectural work should be accessible regardless of borders or politics.",
        ],
    }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            At OneArch, we take your data seriously. Here's how we handle it.
          </p>
        </div>

        <div className="space-y-8">
            {policyPoints.map((point, index) => (
                <div key={index} className="p-8 rounded-lg border bg-card/50 shadow-lg">
                    <div className="flex items-start gap-4">
                        {point.icon}
                        <div>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">{point.title}</h2>
                            <div className="space-y-3 text-lg text-muted-foreground">
                                {point.content.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="p-8 rounded-lg border bg-card/50 shadow-lg">
                <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Note from the creator</h2>
                        <div className="space-y-3 text-lg text-muted-foreground">
                            <p>I’ve worked in software security for 17+ years.</p>
                            <p>OneArch was built from day one with privacy, encryption, and isolation in mind — because I’ve seen firsthand what happens when it’s not.</p>
                            <p>If you ever have concerns or questions, I’ll personally respond.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-lg border bg-green-950/20 border-green-500/30 shadow-lg">
                 <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Summary</h2>
                        <div className="space-y-3 text-lg text-muted-foreground">
                            <p>We don't sell your data. We don't peek into it. We use it only to power features you choose to use — and we protect it with the same infrastructure used by some of the most secure systems on the internet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-muted-foreground text-lg pt-8">
                <p>Have questions? Email me personally at <a href="mailto:nickolay.laptev@gmail.com" className="text-primary hover:underline">nickolay.laptev@gmail.com</a> — I’ll gladly answer.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
