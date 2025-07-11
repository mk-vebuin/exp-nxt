"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
            <Calculator className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold text-primary">Expensiq</span>
        </Link>

        {/* 404 Message */}
        <div className="space-y-4">
          <div className="text-8xl font-bold text-primary opacity-50">404</div>
          <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The
            page might have been moved, deleted, or doesn&apos;t exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Or try one of these:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/app"
              className="text-primary hover:underline underline-offset-4"
            >
              Mobile App
            </Link>
            <Link
              href="/dashboard"
              className="text-primary hover:underline underline-offset-4"
            >
              Web Dashboard
            </Link>
            <Link
              href="/features"
              className="text-primary hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
