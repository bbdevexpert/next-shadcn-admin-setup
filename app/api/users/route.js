import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "/helper/users.json");

export async function GET() {
  // Read data
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  // Add a new user
  const { name, email, phone, role } = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const newUser = { id: Date.now(), name, email, phone, role };
  data.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(newUser), { status: 201 });
}

export async function PUT(req) {
  // Edit an existing user
  const { id, name, email, phone, role } = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const index = data.findIndex((user) => user.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }
  data[index] = { id, name, email, phone, role };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(data[index]), { status: 200 });
}

export async function DELETE(req) {
  // Delete a user
  const { id } = await req.json();
  let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data = data.filter((user) => user.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
