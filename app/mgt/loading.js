import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Skeleton className="h-[calc(100vh-5rem)] w-full rounded-xl flex justify-center items-center">
      <div className="text-lg font-semibold">Loading...</div>
    </Skeleton>
  );
}
