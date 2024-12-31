import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
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
    type: z
        .string()
        .nonempty({ message: "Please select a job type." }),
});

export function CreateOpenings({ initialData, onSubmit }) {
    const isEditing = !!initialData;

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: initialData || {
            name: "",
            description: "",
            type: "",
        },
    });

    function handleSubmit(data) {
        onSubmit(data);
        toast({
            title: isEditing ? "Opening updated successfully!" : "Opening created successfully!",
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
                {
                    isEditing
                        ? <Edit className="w-4 h-4" />
                        : <Button size="sm">{"Create New Opening"}</Button>
                }
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{isEditing ? "Edit Opening" : "New Opening"}</SheetTitle>
                    <SheetDescription>
                        {isEditing
                            ? "Edit the details of the job opening below."
                            : "Fill out the form below to create a new job opening."}
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
                            label="Job Title"
                            placeholder="e.g., Web Designer"
                        />
                        <TextareaField
                            name="description"
                            control={form.control}
                            label="Job Description"
                            placeholder="Provide a detailed description of the job role and responsibilities."
                        />
                        <SelectField
                            name="type"
                            control={form.control}
                            label="Job Type"
                            placeholder="Select job type"
                            options={["Office", "Remote"]}
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
