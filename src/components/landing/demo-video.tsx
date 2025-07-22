import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const demos = [
  {
    title: "Create Architecture as a Junior (Wizard Mode)",
    value: "wizard",
    src: "https://demo.arcade.software/96t55Zq9d3LRpGv1jbTn?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
    arcadeTitle: "Create a Project and Capture Requirements with AI Assistance",
  },
  {
    title: "Start of a Project - From Vague Business Needs to Requirements",
    value: "requirements",
    src: "",
  },
  {
    title: "Make Architectural Decisions as ADRs",
    value: "adrs",
    src: "",
  },
  {
    title: "Design a Diagram",
    value: "diagram",
    src: "",
  },
  {
    title: "Finalize Work for a Project",
    value: "finalize",
    src: "",
  },
];

const ArcadeEmbed = ({ src, title }: { src: string; title: string }) => (
  <div className="max-w-4xl mx-auto">
    <div className="overflow-hidden rounded-lg shadow-2xl">
      <div
        className="relative h-0 w-full"
        style={{ paddingBottom: "calc(54.02777777777777% + 41px)" }}
      >
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          loading="lazy"
          allow="clipboard-write"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
          style={{ colorScheme: "light" }}
        ></iframe>
      </div>
    </div>
  </div>
);

export default function DemoVideo() {
  return (
    <section id="demo" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how OneArch solves common problems.
          </p>
        </div>
        <Tabs defaultValue="wizard" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto">
            {demos.map((demo) => (
              <TabsTrigger
                key={demo.value}
                value={demo.value}
                className="whitespace-normal h-full py-2"
              >
                {demo.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {demos.map((demo) => (
            <TabsContent key={demo.value} value={demo.value} className="pt-8">
              {demo.src ? (
                <ArcadeEmbed src={demo.src} title={demo.arcadeTitle || demo.title} />
              ) : (
                <div className="text-center text-muted-foreground py-16">
                  <p>Demo coming soon.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
