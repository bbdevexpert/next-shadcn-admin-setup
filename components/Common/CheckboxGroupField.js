"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxGroupField({
  name,
  control,
  label,
  description,
  options,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          {options.map((option) => (
            <FormField
              key={option.id}
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem
                  key={option.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(option.id)}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...field.value, option.id])
                          : field.onChange(
                              field.value?.filter(
                                (value) => value !== option.id
                              )
                            )
                      }
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {option.label}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
