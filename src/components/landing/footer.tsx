
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/20 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              The one place for all your architectural needs - with AI-powered assistance.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#main-features" className="text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#demo" className="text-muted-foreground hover:text-primary">Demo</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
                <li><a href="mailto:nickolay.laptev@gmail.com" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Learning Hub</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/share/ba-techniques" className="text-muted-foreground hover:text-primary">
                    Business Analysis Techniques
                  </Link>
                </li>
                <li>
                  <Link href="/share/ai-assistant-for-architects" className="text-muted-foreground hover:text-primary">
                    AI Assistant for Architects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/licensing" className="text-muted-foreground hover:text-primary">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OneArch by Nick Laptev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
