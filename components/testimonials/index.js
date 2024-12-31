
"use client";

import { DataTable } from "../common/Table/data-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, CircleX, FileSliders, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { ActionsModal } from "../common/Modals/ActionsModal";


export default function Index({ data }) {

    const router = useRouter();
    const columns = [
        {
            id: 'No.',
            header: () => <div>#</div>,
            cell: ({ row, column }) => {
                return (
                    <div className="flex items-center gap-2">
                        <span className="text-sm">{parseInt(row?.id) + 1}</span>
                    </div>
                )
            }
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="text-[#ddd] w-[18px] h-[18px] ml-3" />
                </Button>
            ),
            cell: ({ row }) => <div>{row.getValue("name")}</div>,
        },
        {
            accessorKey: "rating",
            header: "Ratting",
        },
        {
            id: "actions",
            header: () => <div className="text-right">Actions</div>,
            enableHiding: false,
            cell: ({ row, column }) => {
                const handleRowClick = () => {
                    const userId = row?.original?.id;
                    console.log("Clicked row ID:", userId); // Logs the `id` of the clicked row
                    // Add any additional logic here, e.g., navigation or API calls
                };

                return (
                    <div className="text-right">
                        <div className="flex justify-end group">
                            <div className="hidden gap-[2px] transition-all duration-1000 ease-in-out group-hover:flex">
                                <div className="cursor-pointer hover:text-primary" onClick={handleRowClick} >
                                    <ActionsModal userId={row?.original?.id} />
                                </div>
                                <div className="cursor-pointer hover:text-primary" onClick={() => router.push(`testimonials/create?id=${row?.original?.id}`)}>
                                    <FileSliders className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex transition-all duration-1000 ease-in-out group-hover:hidden" >
                                <div className="hover:text-primary" >
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
            <DataTable columns={columns} data={data} create={<Button size='sm' onClick={() => router.push('testimonials/create')}>Create</Button>} />
        </div>
    );
}