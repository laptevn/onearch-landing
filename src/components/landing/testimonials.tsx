import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "OnePlace has revolutionized how our firm collaborates. The real-time feedback and version control are game-changers for our projects.",
    name: "Sarah Chen",
    title: "Principal Architect, Innovate Arch.",
    avatar: "https://placehold.co/40x40.png",
    aiHint: "woman architect",
  },
  {
    quote: "The intuitive interface and powerful features make it the best architectural software I've ever used. Highly recommended!",
    name: "Michael Torres",
    title: "Lead Designer, BuildWell Co.",
    avatar: "https://placehold.co/40x40.png",
    aiHint: "man designer",
  },
  {
    quote: "From cloud storage to client presentations, OnePlace handles it all. It has become an indispensable tool for my daily workflow.",
    name: "Emily Rodriguez",
    title: "Freelance Architect",
    avatar: "https://placehold.co/40x40.png",
    aiHint: "woman professional",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our users have to say about their experience with OnePlace.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
