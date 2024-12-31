"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function InputField({
  name,
  control,
  label,
  placeholder,
  description,
  type,
}) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prevVisible) => !prevVisible);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "password" ? (
              <div className="relative">
                <Input
                  {...field}
                  type={visible ? "text" : "password"}
                  placeholder={placeholder}
                />
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
              <Input {...field} placeholder={placeholder} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
