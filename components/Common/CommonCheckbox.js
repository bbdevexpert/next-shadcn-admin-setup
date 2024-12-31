import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function CommonCheckbox(props) {
  const { label, id, error, row, checkList, defaultValue, onValueChange } =
    props;
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div
        className={`flex flex-wrap gap-3 mt-2 ${row ? "flex-row" : "flex-col"}`}
      >
        {checkList?.map((ele, i) => {
          return (
            <div key={i} className="flex items-center space-x-2">
              <Checkbox value={ele.label} id={ele.id} />
              <Label htmlFor={ele.id}>{ele.label}</Label>
            </div>
          );
        })}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
