import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { RadioGroupField } from "./RadioGroupField";
import { CheckboxGroupField } from "./CheckboxGroupField";
import { TextareaField } from "./TextareaField";
import { DatePickerField } from "./DatePickerField";
import { SwitchField } from "./SwitchField";
import { ComboboxField } from "./ComboboxField";
import { TagSelector } from "../ui/tag-selector";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You need to select at least one item.",
  }),
  bio: z
    .string()
    .min(10, { message: "Bio must be at least 10 characters." })
    .max(160, { message: "Bio must not be longer than 160 characters." }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  notifications: z.boolean(),
  language: z.string().nonempty({ message: "Please select a language." }),
  tags: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
      })
    )
    .refine((tags) => tags.length > 0, {
      message: "You must select at least one tag.",
    }),
});

const sidebarItems = [
  { id: "recents", label: "Recents" },
  { id: "home", label: "Home" },
  { id: "applications", label: "Applications" },
  { id: "desktop", label: "Desktop" },
  { id: "downloads", label: "Downloads" },
  { id: "documents", label: "Documents" },
];

const notificationOptions = [
  { value: "all", label: "All new messages" },
  { value: "mentions", label: "Direct messages and mentions" },
  { value: "none", label: "Nothing" },
];

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
];

const availableTags = [
  { id: "1", label: "React" },
  { id: "2", label: "TypeScript" },
  { id: "3", label: "JavaScript" },
  { id: "4", label: "Next.js" },
];

export function CombinedForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      type: "",
      items: [],
      bio: "",
      dob: undefined,
      notifications: true,
      language: "",
      tags: [],
      pin: "",
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          name="username"
          control={form.control}
          label="Username"
          placeholder="shadcn"
          type={"password"}
        />
        <SelectField
          name="email"
          control={form.control}
          label="Email"
          placeholder="Select a verified email to display"
          options={["m@example.com", "m@google.com", "m@support.com"]}
        />
        <RadioGroupField
          name="type"
          control={form.control}
          label="Notify me about..."
          options={notificationOptions}
        />
        <CheckboxGroupField
          name="items"
          control={form.control}
          label="Sidebar"
          options={sidebarItems}
        />
        <TextareaField
          name="bio"
          control={form.control}
          label="Bio"
          placeholder="Tell us a little bit about yourself"
        />
        <DatePickerField
          name="dob"
          control={form.control}
          label="Date of Birth"
        />
        <SwitchField
          name="notifications"
          control={form.control}
          label="Email Notifications"
        />
        <ComboboxField
          name="language"
          control={form.control}
          label="Preferred Language"
          options={languages}
        />
        <TagSelector
          name="tags"
          className="max-w-[400px]"
          availableTags={availableTags}
          selectedTags={form.watch("tags")}
          onChange={(tags) =>
            form.setValue("tags", tags, { shouldValidate: true })
          }
          getValue={(tag) => tag.id}
          getLabel={(tag) => tag.label}
          createTag={(label) => ({ id: crypto.randomUUID(), label })}
        />
        <p className="text-red-500">{form.formState.errors.tags?.message}</p>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
