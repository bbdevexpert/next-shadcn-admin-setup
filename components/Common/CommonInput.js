"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function CommonInput(props) {
  const { label, id, type, error, ...rest } = props;
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prevVisible) => !prevVisible);

  return (
    <div className="">
      <Label htmlFor={id}>{label}</Label>
      {type === "password" ? (
        <div className="relative">
          <Input {...rest} id={id} type={visible ? "text" : "password"} />
          <div
            className="absolute top-[10px] right-3 cursor-pointer"
            onClick={toggleVisibility}
          >
            {visible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </div>
        </div>
      ) : (
        <Input {...rest} id={id} type={type} />
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
