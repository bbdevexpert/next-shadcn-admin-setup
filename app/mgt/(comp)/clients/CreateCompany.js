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
import { toast } from "@/hooks/use-toast";
import { Edit } from "lucide-react";

// Schema with validation
const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .nonempty({ message: "Name is required." }),
  image: z.string().url({ message: "Please provide a valid image URL." }),
});

export function CreateCompany({ initialData, onSubmit }) {
  const isEditing = !!initialData;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: initialData || {
      name: "",
      image: "",
    },
  });

  function handleSubmit(data) {
    onSubmit(data);
    toast({
      title: isEditing
        ? "Company updated successfully!"
        : "Company created successfully!",
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
          <Button size="sm">{"Create New Company"}</Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit Company" : "New Company"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Edit the details of the company below."
              : "Fill out the form below to create a new company."}
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
              label="Company Name"
              placeholder="e.g., Tech Innovators Inc."
            />
            <InputField
              name="image"
              control={form.control}
              label="Image URL"
              placeholder="e.g., https://example.com/logo.jpg"
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
