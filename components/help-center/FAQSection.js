import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password in the account settings page.",
    },
    {
      question: "How can I update my billing information?",
      answer: "Billing details can be updated under billing settings.",
    },
    {
      question: "What should I do if I encounter a technical issue?",
      answer: "Please contact our support team using the form below.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
