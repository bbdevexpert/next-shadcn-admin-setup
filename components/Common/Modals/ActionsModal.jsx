import { useState } from 'react';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { CircleX } from "lucide-react";
import { useRouter } from 'next/navigation';
export function ActionsModal({ userId }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL2}/api/testimonials/delete`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: userId }),
            });

            const result = await response.json();
            console.log('API Response:', result);

            if (response.ok) {
                setIsDeleted(true);
            } else {
                alert(result.error || "Failed to delete the user.");
            }
        } catch (error) {
            console.error("Error in DELETE API call:", error);
            alert("Error occurred while deleting.");
        } finally {
            setIsLoading(false);
            router.push('/mgt/testimonials')
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <CircleX className="w-4 h-4" />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="h-8 px-3 py-1">Cancel</AlertDialogCancel>
                    {/* <AlertDialogAction
                        className="h-8 px-3 py-1 text-white bg-black"
                        onClick={handleDelete}
                        disabled={isLoading} // Disable button during API call
                    >
                        {isLoading ? 'Deleting...' : 'Continue'}
                    </AlertDialogAction> */}
                    <div
                        className="h-8 px-3 py-1 text-white bg-black rounded-md cursor-pointer"
                        onClick={handleDelete}
                        disabled={isLoading} // Disable button during API call
                    >
                        {isLoading ? 'Deleting...' : 'Continue'}
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
            {isDeleted && <div>User has been deleted successfully!</div>}
        </AlertDialog>
    );
}
