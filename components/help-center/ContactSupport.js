import { Button } from "../ui/button";

export function ContactSupport() {
  return (
    <div className="text-center py-12 bg-muted rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Reach out to our support team for further assistance.
      </p>
      <Button size="lg">Contact Support</Button>
    </div>
  );
}
