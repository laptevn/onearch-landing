export default function DemoVideo() {
  return (
    <section id="demo" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how OneArch solves common problems in under 2 minutes.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Jgom28pNXfA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
