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
import { TextareaField } from "@/components/common/TextareaField";
import { SelectField } from "@/components/common/SelectField";
import { toast } from "@/hooks/use-toast";
import { Edit } from "lucide-react";

// Schema with validation
const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .nonempty({ message: "Name is required." }),
  role: z
    .string()
    .min(2, { message: "Role must be at least 2 characters long." })
    .nonempty({ message: "Role is required." }),
  image: z.string().url({ message: "Please provide a valid image URL." }),
  rating: z
    .number()
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must not exceed 5." }),
  feedback: z
    .string()
    .min(10, { message: "Feedback must be at least 10 characters long." })
    .nonempty({ message: "Feedback is required." }),
});

export function CreateTestimonial({ initialData, onSubmit }) {
  const isEditing = !!initialData;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: initialData || {
      name: "",
      role: "",
      image: "",
      rating: 5,
      feedback: "",
    },
  });

  function handleSubmit(data) {
    onSubmit(data);
    toast({
      title: isEditing
        ? "Testimonial updated successfully!"
        : "Testimonial created successfully!",
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
          <Button size="sm">{"Create New Testimonial"}</Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isEditing ? "Edit Testimonial" : "New Testimonial"}
          </SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Edit the details of the testimonial below."
              : "Fill out the form below to create a new testimonial."}
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
              placeholder="e.g., Alice Johnson"
            />
            <InputField
              name="role"
              control={form.control}
              label="Role"
              placeholder="e.g., Product Manager"
            />
            <InputField
              name="image"
              control={form.control}
              label="Image URL"
              placeholder="e.g., https://example.com/photo.jpg"
            />
            <InputField
              name="rating"
              control={form.control}
              type="number"
              label="Rating (1-5)"
              placeholder="e.g., 5"
            />
            <TextareaField
              name="feedback"
              control={form.control}
              label="Feedback"
              placeholder="Share your experience..."
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
