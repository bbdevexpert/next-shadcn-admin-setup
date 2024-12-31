"use client";
import { DataTable } from "@/components/common/Table/data-table";
import { CreateUser } from "./CreateUser";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function Users({ users }) {
  const [usersData, setUsersData] = useState(users);

  const fetchData = async () => {
    try {
      const data = await fetcher("http://localhost:3000/api/users");
      setUsersData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUserChange = () => {
    fetchData();
  };
  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      const result = await response.json();
      if (result.success) {
        // Refetch the table data after deletion
        fetchData();
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

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
                    onAction={() => handleDeleteUser(row.original.id)}
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
        <DataTable
          columns={columns}
          data={usersData}
          create={<CreateUser onSubmit={handleUserChange} />}
        />
      </div>
    </div>
  );
}
