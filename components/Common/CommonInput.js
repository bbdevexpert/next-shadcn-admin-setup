import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CommonInput(props) {
  const { label, ...rest } = props;
  return (
    <div className="">
      <Label htmlFor={label}>{label}</Label>
      <Input {...rest} />
    </div>
  );
}
