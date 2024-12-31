import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CommonRadio(props) {
  const { label, id, error, row, radioList, defaultValue, onValueChange } =
    props;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <RadioGroup
        id={id}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        className={`flex flex-wrap gap-3 mt-2 ${row ? "flex-row" : "flex-col"}`}
      >
        {radioList?.map((ele, i) => {
          return (
            <div key={i} className="flex items-center space-x-2">
              <RadioGroupItem value={ele.label} id={ele.id} />
              <Label htmlFor={ele.id}>{ele.label}</Label>
            </div>
          );
        })}
      </RadioGroup>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
