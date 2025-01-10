import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "/helper/users.json");

const readData = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

export async function GET() {
  return new Response(JSON.stringify(readData()), { status: 200 });
}

export async function POST(req) {
  const { name, email, phone, role } = await req.json();
  const data = readData();
  const newUser = { id: Date.now(), name, email, phone, role };
  data.push(newUser);
  writeData(data);
  return new Response(JSON.stringify(newUser), { status: 201 });
}

export async function PUT(req) {
  const { id, name, email, phone, role } = await req.json();
  const data = readData();
  const index = data.findIndex((user) => user.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }
  data[index] = { id, name, email, phone, role };
  writeData(data);
  return new Response(JSON.stringify(data[index]), { status: 200 });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const data = readData().filter((user) => user.id !== id);
  writeData(data);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
