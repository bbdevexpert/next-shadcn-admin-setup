import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CommonTextarea(props) {
  const { label, ...rest } = props;
  return (
    <div className="min-w-96">
      <Label htmlFor={label}>{label}</Label>
      <Textarea {...rest} />
    </div>
  );
}
