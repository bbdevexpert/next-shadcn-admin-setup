"use client";
import { DataTable } from "@/components/common/Table/data-table";
import { CreateUser } from "./CreateUser";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Users({ users }) {
  const [usersData, setUsersData] = useState(users); // Initial state from server-side
  const [loading, setLoading] = useState(false); // Loading state for actions

  // Fetch the latest user data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsersData(data); // Update state with new data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle data changes
  const handleUserChange = () => {
    fetchData(); // Refetch data after adding or updating
  };

  // Handle user deletion
  const handleDeleteUser = async (userId, closeModal) => {
    setLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      const result = await response.json();
      if (result.success) {
        fetchData(); // Refetch data after deletion
        closeModal(); // Close modal on success
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  // Define table columns
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="w-[200px]">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <div className="w-[100px]">{row.getValue("role")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="w-[220px]">{row.getValue("email")}</div>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-center">Actions</div>,
      cell: ({ row }) => {
        return (
          <div className="text-center">
            <div className="flex justify-center group">
              <div className="hidden gap-1 transition-all duration-1000 ease-in-out group-hover:flex">
                <ActionModal
                  triggerButtonLabel={<CircleX className="w-4 h-4" />}
                  title="Are you sure you want to remove this user?"
                  description="This action will permanently delete the user and their details."
                  cancelLabel="Cancel"
                  actionLabel="Delete"
                  onAction={(closeModal) =>
                    handleDeleteUser(row.original.id, closeModal)
                  }
                />
                <CreateUser
                  initialData={row.original}
                  onSubmit={handleUserChange} // Refresh data on edit
                />
              </div>
              <div className="group-hover:hidden">
                <MoreHorizontal className="w-4 h-4" />
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
      {loading && <p>Loading...</p>}
      <DataTable
        columns={columns}
        data={usersData} // Use the updated data from state
        create={<CreateUser onSubmit={handleUserChange} />}
      />
    </div>
  );
}
