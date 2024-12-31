import fetcher from "@/lib/fetcher";
import Users from "./Users";

// Fetch data on the server-side
async function getData() {
  try {
    const data = await fetcher(`http://localhost:3000/api/users`);
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

  return <Users users={data} />;
}
