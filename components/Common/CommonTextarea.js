import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CommonTextarea(props) {
  const { label, error, id, ...rest } = props;
  return (
    <div className="">
      <Label htmlFor={id}>{label}</Label>
      <Textarea {...rest} id={id} />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
