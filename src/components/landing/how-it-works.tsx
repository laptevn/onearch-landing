import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Design & Collaborate",
        description: "Use our intuitive tools to bring your vision to life. Invite your team to collaborate in real-time, making feedback and revisions seamless.",
    },
    {
        number: "02",
        title: "Review & Iterate",
        description: "Share your designs with clients and stakeholders. Gather feedback, track changes, and iterate on your designs with full version history.",
    },
    {
        number: "03",
        title: "Finalize & Deliver",
        description: "Once approved, generate high-quality exports and documentation. Deliver your final project with confidence and professionalism.",
    }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Streamline Your Workflow
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, yet powerful process to take your projects from idea to reality.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-12">
                {steps.map((step) => (
                    <div key={step.number} className="flex items-start gap-6">
                        <div className="flex-shrink-0 text-4xl font-bold text-primary opacity-50">{step.number}</div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative h-96">
                <Image
                src="https://placehold.co/500x500.png"
                alt="Workflow diagram"
                fill
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint="architectural blueprints"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
