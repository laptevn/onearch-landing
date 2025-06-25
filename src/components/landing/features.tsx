import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Cloud, ShieldCheck, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Seamless Collaboration",
    description: "Work with your team in real-time, share feedback, and keep everyone on the same page, effortlessly.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud-Powered",
    description: "Access your projects from anywhere, on any device. Your work is securely stored and always in sync.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Protect your sensitive data with industry-leading security standards and robust access controls.",
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-primary" />,
    title: "Project Templates",
    description: "Kickstart your projects with a library of professionally designed templates for various architectural needs.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose OneArch?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to streamline your architectural workflow in one platform.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
