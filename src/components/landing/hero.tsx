import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              OneArch: The One Place for All Your Architectural Needs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Streamline your design and collaboration process. From concept to
              construction, OneArch provides the tools you need to create
              stunning architectural projects.
            </p>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="https://app.theone.archi/" target="_blank" rel="noopener noreferrer">Try the Free MVP</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/hero.png"
              alt="Architectural design"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
              data-ai-hint="digital architecture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
