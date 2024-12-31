"use client";
import { DataTable } from "@/components/common/Table/data-table";
import { CreateProduct } from "./CreateProduct";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal } from "lucide-react";

export default function Products() {
  // Sample data
  const data = [
    {
      id: 1,
      image: "/images.png",
      name: "Product A",
      category: "Category 1",
      price: 100,
      description: "High-quality product A.",
    },
    {
      id: 2,
      image: "/images.png",
      name: "Product B",
      category: "Category 2",
      price: 200,
      description: "Durable product B.",
    },
    {
      id: 3,
      image: "/images.png",
      name: "Product C",
      category: "Category 3",
      price: 300,
      description: "Eco-friendly product C.",
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
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <div>{row.getValue("category")}</div>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <div>${row.getValue("price")}</div>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <div>{row.getValue("description")}</div>,
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => {
        const handleDeleteAction = () => {
          console.log("Product deleted");
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
                    title="Are you sure you want to remove this product?"
                    description="This action will permanently delete the product and all associated details. Do you want to continue?"
                    cancelLabel="Cancel"
                    actionLabel="Delete"
                    onAction={handleDeleteAction}
                  />
                </div>
                <div className="cursor-pointer hover:text-primary">
                  <CreateProduct
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
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data} create={<CreateProduct />} />
      </div>
    </div>
  );
}
