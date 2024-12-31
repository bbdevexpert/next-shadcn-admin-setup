import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SearchBar({ placeholder }) {
  return (
    <div className="relative max-w-lg">
      <Input type="text" className="!py-5 px-3" placeholder={placeholder} />
      <Button className="absolute right-2 top-2 px-2 py-[5px] h-auto" size="sm">
        Search
      </Button>
    </div>
  );
}
