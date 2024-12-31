"use client";
import { useState } from "react";

// Client Component for UI and Logic
const UserManagement = ({ users }) => {
  const [userList, setUserList] = useState(users || []);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle user creation
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APIURL2}/api/user/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const newUser = await response.json();
      setUserList([...userList, newUser]); // Update the list with the new user
      setFormData({ name: "", email: "" }); // Clear the form
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">User Management</h1>

      {/* User List */}
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Users</h2>
        {userList.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="pl-5 space-y-1 list-disc">
            {userList.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Create User Form */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Create New User</h2>
        <form onSubmit={handleCreateUser} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-white bg-blue-600 rounded disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create User"}
          </button>
        </form>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default UserManagement;
