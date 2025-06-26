import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#main-features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#faq", label: "FAQ" },
  { href: "mailto:nickolay.laptev@gmail.com", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link
              href="https://app.theone.archi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it Free
            </Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex h-full flex-col justify-between pb-8">
                  <div className="flex flex-col gap-6 pt-8">
                    <Logo />
                    <nav className="grid gap-4">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <Button className="w-full" asChild>
                    <Link
                      href="https://app.theone.archi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try it Free
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
