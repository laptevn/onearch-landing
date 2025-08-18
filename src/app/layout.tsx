import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "OneArch",
  description: "OneArch is the one place for all your architectural needs - with AI-powered assistance. Streamline your design and collaboration process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%234A818F' d='M50 5L10 30V70L50 95L90 70V30L50 5ZM50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z M45 35H55V65H45V35Z M25 40H35V60H25V40Z M65 40H75V60H65V40Z'%3E%3C/path%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s5mzj7tqy2");
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen font-body antialiased",
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
