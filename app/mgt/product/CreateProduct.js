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
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long." })
    .nonempty({ message: "Description is required." }),
  category: z.string().nonempty({ message: "Please select a category." }),
  price: z.number().positive({ message: "Price must be a positive number." }),
  image: z.string().url({ message: "Please provide a valid image URL." }),
});

export function CreateProduct({ initialData, onSubmit }) {
  const isEditing = !!initialData;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      category: "",
      price: "",
      image: "",
    },
  });

  function handleSubmit(data) {
    onSubmit(data);
    toast({
      title: isEditing
        ? "Product updated successfully!"
        : "Product created successfully!",
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
          <Button size="sm">{"Create New Product"}</Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit Product" : "New Product"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Edit the details of the product below."
              : "Fill out the form below to create a new product."}
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
              label="Product Name"
              placeholder="e.g., Eco-friendly Bottle"
            />
            <InputField
              name="image"
              control={form.control}
              label="Image URL"
              placeholder="e.g., https://example.com/image.jpg"
            />
            <InputField
              name="price"
              control={form.control}
              label="Price"
              placeholder="e.g., 99.99"
              type="number"
            />
            <TextareaField
              name="description"
              control={form.control}
              label="Description"
              placeholder="Provide a detailed description of the product."
            />
            <SelectField
              name="category"
              control={form.control}
              label="Category"
              placeholder="Select category"
              options={["Category 1", "Category 2", "Category 3"]}
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
