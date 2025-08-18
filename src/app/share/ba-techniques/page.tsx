
import { BrainCircuit, Check, ClipboardX, Compass, FileCheck, FileText, History, ListChecks, MessageSquare, Puzzle, Share, ShieldCheck, Sigma, Waypoints } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PromoPopup from "@/components/share/promo-popup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analysis Techniques for High-Quality Requirements",
  description: "A toolkit of 9 essential business analysis techniques to help you clarify goals, define scope, and write high-quality, testable requirements.",
};

const techniques = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Clarify with “5 Whys”",
      solves: "Vague or superficial business goals without clear causes or actions (e.g. “improve UX”, “increase revenue”).",
      how: "Start with a broad or unclear statement. Ask “Why?” up to 5 times, each time digging deeper into motivations and obstacles.",
      example: `❓Need: “We want better customer engagement.”
→ Why? Customers ignore emails.
→ Why? Emails feel irrelevant.
→ Why? No personalization.
→ Why? Data not available to marketing team.
⇒ Functional requirement: “System must provide marketing access to customer purchase history.”`
    },
    {
      icon: <ListChecks className="w-8 h-8 text-primary" />,
      title: "Use User Stories + Acceptance Criteria",
      solves: "Lack of context about who needs the feature and why — or when requirements aren't testable.",
      how: "Write user stories in the format:\nAs a [user], I want [goal], so that [reason].\nThen define what must happen for the story to be “done” (acceptance criteria).",
      example: `User Story:
As a customer, I want to reset my password, so that I can log in if I forget it.

Acceptance Criteria:
- Reset link is sent via email
- Link is valid for 24 hours
- User must enter new password twice`
    },
    {
      icon: <Puzzle className="w-8 h-8 text-primary" />,
      title: "Decompose with “Feature Breakdown”",
      solves: "High-level ideas that lump many features together (“Build a portal”, “Automate hiring”) with no actionable pieces.",
      how: "Write the vague goal on a whiteboard.\nAsk: “What would the user actually do here?”\nBreak it down into concrete user actions or system functions.\nRepeat decomposition until each piece is actionable and testable.",
      example: `Need: “We need a customer portal.”
Breakdown:
- Register account
- Login/logout
- View/edit profile
- Track orders
- Download invoices
Each becomes a separate functional requirement.`
    },
    {
      icon: <Waypoints className="w-8 h-8 text-primary" />,
      title: "Model with Use Case Diagrams",
      solves: "Ambiguity about system boundaries, who does what, and what interactions exist.",
      how: "Identify the actors (users, external systems).\nList actions each actor performs with the system.\nDraw connections — each action is a “use case.”\nValidate with stakeholders: “Did we miss anything?”",
      example: `Use Case: Onboarding System
Actor: HR
Use cases: Create employee profile, Assign laptop, Assign mentor
⇒ Functional requirement: “System must allow HR to input new employee info and assign assets.”`
    },
    {
      icon: <ClipboardX className="w-8 h-8 text-primary" />,
      title: "Create Mockups or Prototypes",
      solves: "Vague expectations like “Make it intuitive”, or stakeholders not knowing what they want until they see it.",
      how: "Sketch UI wireframes or interactive prototypes.\nWalk the stakeholder through the journey.\nObserve what they point out or question.\nTranslate comments into functional requirements.",
      example: `Prototype: Dashboard with 4 widgets
Stakeholder says: “I want to compare these charts by month.”
⇒ Requirement: “Dashboard must allow users to filter widgets by date range.”`
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Ask “How Would You Know It’s Done?”",
      solves: "Requests with no measurable outcome or testability — like “Improve performance” or “Modernize UX”.",
      how: "Ask: “If this feature was done, what would you see, hear, or do differently?” or “How will we measure success?”",
      example: `❓Need: “Improve team collaboration.”
Analyst: “How would we know if it’s improved?”
Stakeholder: “We’d stop using email chains.”
⇒ Functional requirement: “Introduce team chat with thread support and file sharing.”`
    },
    {
      icon: <Sigma className="w-8 h-8 text-primary" />,
      title: "Define System Events & Responses",
      solves: "Unclear system behavior in response to real-world events.",
      how: "List business events (e.g., “User submits form”).\nAsk what must happen in response (emails, data saved, notifications).\nEach response becomes a requirement.",
      example: `Event: “Customer places an order”
Responses:
- Store order in DB
- Reduce inventory count
- Send confirmation email
- Notify shipping team
⇒ Each is a functional requirement.`
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Document Non-Goals Explicitly",
      solves: "Assumptions about what the system will do — preventing scope creep or misalignment.",
      how: "During requirement sessions, ask: “What will this system not do?” or “What will still be manual?”",
      example: `Stakeholder: “We want automatic invoices.”
Analyst: “So no manual invoices ever?”
Stakeholder: “Only for international clients.”
⇒ Requirements:
- Generate invoices automatically for domestic orders
- Allow manual override for international orders`
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "CIVs Analysis (Challenging–Important–Valuable)",
      solves: "Helps prioritize high-impact problems by evaluating them through business-critical lenses (tech, operations, finance). It ensures the product solves problems that are worth solving — not just doable or requested.",
      how: "Ask three sets of questions:\nChallenging: What makes this problem technically or operationally hard to solve? (Ask the hypothetical CTO.)\nImportant: What non-economic factors make solving this problem essential? (Ask the CPO — Chief Procurement Officer.)\nValuable: How exactly does solving this problem increase revenue, reduce cost, or mitigate risk? (Ask the CFO.)\nFocus on the problem’s nature, pain intensity, and business relevance, not on solution features.",
      example: `❓Business request: “Speed up customer onboarding”
Challenging: Manual verification of documents at scale is error-prone and labor-intensive.
Important: Delays in onboarding damage customer trust and reduce engagement.
Valuable: Automating onboarding reduces manual staffing by 40%, accelerating time to revenue.
⇒ Requirements derived:
- System must extract and validate ID data automatically
- Status tracking and reminders must be sent to users during onboarding
- Admin portal must allow verification overrides and audit trail`
    }
  ];

export default function BaTechniquesPage() {
    return (
        <div className="relative">
            <PromoPopup />
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Business Analysis Techniques
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        A toolkit for uncovering and defining high-quality requirements.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {techniques.map((technique, index) => (
                        <Card key={index} className="bg-card/50 border-0 shadow-lg flex flex-col">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    {technique.icon}
                                    <CardTitle>{technique.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow gap-4">
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Check className="w-5 h-5 text-green-500"/> Solves:</h4>
                                    <p className="text-muted-foreground text-sm">{technique.solves}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">⚙️ How to use it:</h4>
                                    <p className="text-muted-foreground text-sm whitespace-pre-wrap">{technique.how}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">💡 Example:</h4>
                                    <pre className="text-muted-foreground text-sm whitespace-pre-wrap font-body bg-muted/50 p-3 rounded-md">{technique.example}</pre>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
