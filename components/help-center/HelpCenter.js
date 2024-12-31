"use client";

import { SearchBar } from "./SearchBar";
import { FAQSection } from "./FAQSection";
import { Categories } from "./Categories";
import { ContactSupport } from "./ContactSupport";

export default function HelpCenter() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">
          How can we help you?
        </h1>
        <p className="text-gray-600">
          Find answers to your questions or get in touch with our support team.
        </p>
        <div className="mt-4">
          <SearchBar placeholder="Search for help articles, topics, or FAQs" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Explore Topics</h2>
        <Categories />
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <FAQSection />
      </div>

      {/* Contact Support Section */}
      <ContactSupport />
    </div>
  );
}
