import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Learning() {
  return (
    <section id="learning" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learning Hub
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore articles and resources to sharpen your architectural skills.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Link href="/share/ba-techniques">
            <Card className="bg-card/50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-between p-6">
                <CardTitle className="text-xl">Business Analysis Techniques</CardTitle>
                <ArrowRight className="w-6 h-6 text-primary" />
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
