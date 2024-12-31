import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">500</h1>
        <span className="font-medium">{`Oops! Something went wrong :')`}</span>
        <p className="text-center text-muted-foreground">
          We apologize for the inconvenience. <br />
          Please try again later.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline">Go Back</Button>
          <Button>Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
