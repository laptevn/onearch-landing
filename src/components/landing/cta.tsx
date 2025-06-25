import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to Transform Your Projects?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of architects and designers who are building better,
          faster, with OnePlace.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
