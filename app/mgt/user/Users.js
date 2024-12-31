"use client";
import { DataTable } from "@/components/common/Table/data-table";
import { CreateUser } from "./CreateUser";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal } from "lucide-react";

export default function Users() {
  // Sample user data
  const data = [
    { id: 1, name: "John Doe", role: "Admin", email: "john.doe@example.com" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Editor",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Alice Brown",
      role: "Viewer",
      email: "alice.brown@example.com",
    },
  ];

  // Column definitions
  const columns = [
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
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
        const handleDeleteUser = () => {
          console.log("User deleted:", row.original.name);
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
                    title="Are you sure you want to remove this user?"
                    description="This action will permanently delete the user and their details. Do you want to continue?"
                    cancelLabel="Cancel"
                    actionLabel="Delete"
                    onAction={handleDeleteUser}
                  />
                </div>
                <div className="cursor-pointer hover:text-primary">
                  <CreateUser initialData={row.original} />
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
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data} create={<CreateUser />} />
      </div>
    </div>
  );
}
