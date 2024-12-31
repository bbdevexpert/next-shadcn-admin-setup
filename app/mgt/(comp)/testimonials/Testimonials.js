"use client";
import { DataTable } from "@/components/common/Table/data-table";
import { CreateTestimonial } from "./CreateTestimonial";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal } from "lucide-react";

export default function Testimonials() {
  // Sample data
  const data = [
    {
      id: 1,
      image: "/images.png",
      name: "Alice Johnson",
      role: "Product Manager",
      rating: 5,
      feedback: "Excellent service! Highly recommended.",
    },
    {
      id: 2,
      image: "/images.png",
      name: "Bob Smith",
      role: "Software Engineer",
      rating: 4,
      feedback: "Great experience working with the team.",
    },
    {
      id: 3,
      image: "/images.png",
      name: "Charlie Brown",
      role: "Designer",
      rating: 5,
      feedback: "Fantastic work. Will definitely return.",
    },
  ];

  // Column definitions
  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <img
          src={row.getValue("image")}
          alt={row.getValue("name")}
          className="w-16 h-16 object-cover rounded-full"
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <div>{row.getValue("role")}</div>,
    },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ row }) => <div>{"⭐".repeat(row.getValue("rating"))}</div>,
    },
    {
      accessorKey: "feedback",
      header: "Feedback",
      cell: ({ row }) => <div>{row.getValue("feedback")}</div>,
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
        const handleDeleteAction = () => {
          console.log("Testimonial deleted");
          // Perform delete action
        };

        return (
          <div className="text-right">
            <div className="flex justify-end group">
              <div className="hidden gap-[2px] transition-all duration-1000 ease-in-out group-hover:flex">
                <div className="cursor-pointer hover:text-primary">
                  {/* Delete Action */}
                  <ActionModal
                    triggerButtonLabel={<CircleX className="w-4 h-4" />}
                    title="Are you sure you want to remove this testimonial?"
                    description="This action will permanently delete the testimonial. Do you want to continue?"
                    cancelLabel="Cancel"
                    actionLabel="Delete"
                    onAction={handleDeleteAction}
                  />
                </div>
                <div className="cursor-pointer hover:text-primary">
                  <CreateTestimonial
                    // onSubmit={handleEditSubmit}
                    initialData={row.original}
                  />
                </div>
              </div>
              <div className="flex transition-all duration-1000 ease-in-out group-hover:hidden">
                <div className="hover:text-primary">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Testimonials</h1>
      </div>
      <div>
        <DataTable
          columns={columns}
          data={data}
          create={<CreateTestimonial />}
        />
      </div>
    </div>
  );
}
