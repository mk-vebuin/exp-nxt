"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calculator, Download, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#pricing", label: "Pricing" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-primary/20">
      <div className="container relative flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
            <Calculator className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold text-primary">Expensiq</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <Link href="/download">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 hover:bg-primary/5"
              >
                <Download className="mr-1 h-3 w-3" />
                Download
              </Button>
            </Link>
            <Link href="/app">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 shadow-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="border-primary/30">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 px-6 py-6">
              <div className="flex flex-col space-y-6">
                {/* Logo in mobile menu */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={handleNavClick}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                      <Calculator className="h-4 w-4" />
                    </div>
                    <span className="text-xl font-bold text-primary">
                      Expensiq
                    </span>
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Link href="/download" onClick={handleNavClick}>
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/5"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download App
                    </Button>
                  </Link>
                  <Link href="/app" onClick={handleNavClick}>
                    <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="/dashboard" onClick={handleNavClick}>
                    <Button
                      variant="secondary"
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Web Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
