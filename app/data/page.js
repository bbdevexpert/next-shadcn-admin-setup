"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", value: "" });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  console.log(data, "data");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";
    const response = await fetch("/api/data", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.json();
    if (method === "POST") setData([...data, result]);
    if (method === "PUT")
      setData(data.map((d) => (d.id === result.id ? result : d)));
    setForm({ id: "", name: "", value: "" });
  };

  const handleDelete = async (id) => {
    await fetch("/api/data", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setData(data.filter((d) => d.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Value"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
        />
        <button type="submit">{form.id ? "Update" : "Add"}</button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}: {item.value}
            <button onClick={() => setForm(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
