import { ArrowRight, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Announcement Banner */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-sm">
          <span className="text-blue-600 font-medium">New!</span>
          <span className="text-gray-600">Put an announcement here</span>
          <Megaphone className="h-4 w-4 text-gray-400" />
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl text-center">
        <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Your revolutionary
          <br />
          Next.js SaaS
        </h1>
        <p className="mb-12 text-xl text-gray-600">
          This is a demo application built with Achromatic. It will save you
          time and effort building your next SaaS.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-8">
            Start for free
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8">
            Talk to sales
          </Button>
        </div>
      </div>
    </div>
  );
}
