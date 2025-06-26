export default function DemoVideo() {
  return (
    <section id="demo" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how OneArch solves common problems in under 1 minute.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div
              className="relative h-0 w-full"
              style={{ paddingBottom: "calc(54.02777777777777% + 41px)" }}
            >
              <iframe
                src="https://demo.arcade.software/LdwyDGw5z4HV2PUPxV9z?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
                title="Review Project Requirements and Decisions with AI Insights"
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
      </div>
    </section>
  );
}
