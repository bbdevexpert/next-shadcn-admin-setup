"use client";

import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { MainNav } from "./main-nav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button size="sm" className="hidden md:inline-flex">
              Sign up
            </Button>
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Button variant="ghost" asChild>
                    <a href="#products">Products</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="#solutions">Solutions</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="#resources">Resources</a>
                  </Button>
                  <Button variant="ghost" asChild>
                    <a href="#pricing">Pricing</a>
                  </Button>
                  <Button variant="ghost">Log in</Button>
                  <Button>Sign up</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
