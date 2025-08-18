"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { Logo } from "../ui/logo";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // We delay opening the dialog slightly to ensure the page has rendered,
    // which prevents layout shifts and feels smoother.
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <Logo />
          <AlertDialogTitle className="pt-4 text-2xl">
            Unlock Your Full Potential with OneArch
          </AlertDialogTitle>
          <AlertDialogDescription>
            You're viewing a shared resource that highlights techniques used within the OneArch platform. OneArch helps architects apply this knowledge with powerful AI assistance, structured templates, and collaborative tools.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-col sm:justify-center sm:space-x-0 gap-2">
          <AlertDialogAction asChild>
            <Link href="/">Try the Product</Link>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Proceed to Content
            </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
