import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Heading(props) {
  const { head, smallHead } = props;
  return (
    <>
      {head && <div>{head}</div>}
      {smallHead && <div className="text-lg font-semibold">{smallHead}</div>}
    </>
  );
}
