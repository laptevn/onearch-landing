import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              OneArch
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              The one place for all your architectural needs - with AI-powered
              assistance
            </p>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link
                  href="https://app.theone.archi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">Watch Demo</Link>
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
