"use client";
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
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

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

  const [open, setOpen] = useState(false); // Track sheet open/close state

  async function handleSubmit(data) {
    try {
      let method = isEditing ? "PUT" : "POST";
      const body = JSON.stringify(
        isEditing ? { ...data, id: initialData.id } : data
      );

      const response = await fetch("/api/users", {
        method,
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to process user data");
      }

      const result = await response.json();
      onSubmit(result); // Notify parent of changes
      setOpen(false); // Close sheet
      form.reset(); // Reset form state

      toast({
        title: isEditing
          ? "User updated successfully!"
          : "User created successfully!",
        description: "Operation completed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {isEditing ? (
          <Edit className="w-4 h-4" />
        ) : (
          <Button>Create New User</Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit User" : "New User"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Edit the details of the user below."
              : "Fill out the form to create a new user."}
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <InputField name="name" control={form.control} label="Name" />
            <InputField name="email" control={form.control} label="Email" />
            <SelectField
              name="role"
              control={form.control}
              label="Role"
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
