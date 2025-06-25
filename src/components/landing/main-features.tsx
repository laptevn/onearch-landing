import Image from "next/image";
import { FolderArchive, Bot } from "lucide-react";

export default function MainFeatures() {
  return (
    <section id="main-features" className="py-12 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Solution You've Been Waiting For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            OneArch brings clarity, consistency, and intelligence to your architecture process.
          </p>
        </div>

        {/* Feature 1: Text | Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="text-center lg:text-left">
            <div className="mb-4 flex items-center justify-center lg:justify-start gap-4">
                <FolderArchive className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">
                    One Place for All Your Architecture Artifacts
                </h3>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              No more scattered docs, chats, and diagrams. OneArch gives you a single source of truth for every architectural decision and requirement – structured and searchable.
            </p>
          </div>
          <div>
            <Image
              src="/feature-artifacts.png"
              alt="Centralized architecture artifacts"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
              data-ai-hint="organized files dashboard"
            />
          </div>
        </div>

        {/* Feature 2: Image | Text (desktop), Text | Image (mobile) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-last">
            <div className="text-center lg:text-left">
              <div className="mb-4 flex items-center justify-center lg:justify-start gap-4">
                  <Bot className="w-10 h-10 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                      AI Assistant That Enhances Your Architecture
                  </h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
               Get real-time feedback on requirements and decisions. The AI assistant reviews, suggests improvements, and ensures you're not missing critical aspects.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/feature-ai.png"
              alt="AI Assistant providing feedback"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
              data-ai-hint="ai robot chat interface"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
