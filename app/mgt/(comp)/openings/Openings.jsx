'use client'
import { DataTable } from "@/components/common/Table/data-table";
import { CreateOpenings } from "./CreateOpenings";
import { ActionModal } from "@/components/common/Modals/ActionModal";
import { CircleX, MoreHorizontal, } from "lucide-react";

export default function Openings() {
    // Sample data
    const data = [
        { id: 1, name: "Web Design", type: "Service", description: "Create beautiful and functional websites." },
        { id: 2, name: "Graphic Design", type: "Service", description: "Design visually appealing graphics." },
        { id: 3, name: "SEO Optimization", type: "Service", description: "Improve search engine rankings." },
    ];

    // Column definitions
    const columns = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => <div>{row.getValue("name")}</div>,
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: ({ row }) => <div>{row.getValue("type")}</div>,
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
                    console.log("Account deleted");
                    // Perform delete action
                }

                return (
                    <div className="text-right">
                        <div className="flex justify-end group">
                            <div className="hidden gap-[2px] transition-all duration-1000 ease-in-out group-hover:flex">
                                <div className="cursor-pointer hover:text-primary">
                                    {/* Delete Action */}
                                    <ActionModal
                                        triggerButtonLabel={<CircleX className="w-4 h-4" />}
                                        title="Are you sure you want to remove this job opening?"
                                        description="This action will permanently delete the job post and all associated details. Do you want to continue?"
                                        cancelLabel="Cancel"
                                        actionLabel="Delete"
                                        onAction={handleDeleteAction}
                                    />
                                </div>
                                <div className="cursor-pointer hover:text-primary" >
                                    <CreateOpenings
                                        // onSubmit={handleEditSubmit}
                                        initialData={row.original}
                                    />
                                </div>
                            </div>
                            <div className="flex transition-all duration-1000 ease-in-out group-hover:hidden" >
                                <div className="hover:text-primary" >
                                    <MoreHorizontal className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
        },
    ];

    return (
        <div>
            <div className="mb-2 flex items-center justify-between space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Job Openings</h1>
            </div>
            <div>
                <DataTable
                    columns={columns}
                    data={data}
                    create={<CreateOpenings />}
                />
            </div>
        </div>
    );
}
