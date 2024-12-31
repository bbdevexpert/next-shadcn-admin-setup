import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/common/InputField";
import { SelectField } from "@/components/common/SelectField";
import { toast } from "@/hooks/use-toast";
import { Edit } from "lucide-react";

// Schema with validation
const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .nonempty({ message: "Name is required." }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
  role: z.string().nonempty({ message: "Please select a role." }),
});

export function CreateUser({ initialData, onSubmit }) {
  const isEditing = !!initialData;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: initialData || {
      name: "",
      email: "",
      role: "",
    },
  });

  function handleSubmit(data) {
    onSubmit(data);
    toast({
      title: isEditing
        ? "User updated successfully!"
        : "User created successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {isEditing ? (
          <Edit className="w-4 h-4" />
        ) : (
          <Button size="sm">{"Create New User"}</Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit User" : "New User"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Edit the details of the user below."
              : "Fill out the form below to create a new user."}
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 mt-6"
          >
            <InputField
              name="name"
              control={form.control}
              label="Name"
              placeholder="e.g., John Doe"
            />
            <InputField
              name="email"
              control={form.control}
              label="Email"
              placeholder="e.g., john.doe@example.com"
            />
            <SelectField
              name="role"
              control={form.control}
              label="Role"
              placeholder="Select role"
              options={["Admin", "Editor", "Viewer"]}
            />
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button type="submit">{isEditing ? "Update" : "Submit"}</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
