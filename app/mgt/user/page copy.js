import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import fetcher from "@/lib/fetcher";

// Dynamically import the Testimonial component
const UserManagement = dynamic(() => import("@/components/user"));

// Fetch data on the server-side
async function getData() {
  try {
    const data = await fetcher(`/api/users`);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Page() {
  const data = await getData();

  // If data is not found, show a 404 error page
  if (!data || data.length === 0) {
    notFound();
  }

  // Return the dynamic Testimonial component with data as a prop
  return <UserManagement users={data} />;
}
