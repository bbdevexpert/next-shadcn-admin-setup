"use client";
import { DataTable } from "@/components/common/Table/data-table";
import { CreateCompany } from "./CreateCompany";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal } from "lucide-react";

export default function Companies() {
  // Sample data
  const data = [
    { id: 1, image: "/images.png", name: "Company A" },
    { id: 2, image: "/images.png", name: "Company B" },
    { id: 3, image: "/images.png", name: "Company C" },
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
          className="w-16 h-16 object-cover"
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
        const handleDeleteAction = () => {
          console.log("Company deleted");
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
                    title="Are you sure you want to remove this company?"
                    description="This action will permanently delete the company and all associated details. Do you want to continue?"
                    cancelLabel="Cancel"
                    actionLabel="Delete"
                    onAction={handleDeleteAction}
                  />
                </div>
                <div className="cursor-pointer hover:text-primary">
                  <CreateCompany
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
        <h1 className="text-2xl font-bold tracking-tight">Companies</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data} create={<CreateCompany />} />
      </div>
    </div>
  );
}
