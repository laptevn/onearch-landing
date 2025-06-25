import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="py-12 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Made by a Practicing Software Architect
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              I’m Nick Laptev. After 12+ years in software architecture and seeing countless failed or inefficient architecture processes, I’ve built OneArch as the solution I wish existed. It’s fast, focused, and finally makes architectural work manageable – and even a little fun.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://placehold.co/300x300.png"
              alt="Nick Laptev, Founder of OneArch"
              width={300}
              height={300}
              className="rounded-full shadow-2xl"
              data-ai-hint="man portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
