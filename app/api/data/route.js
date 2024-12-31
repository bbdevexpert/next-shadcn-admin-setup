import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "/helper/data.json");

export async function GET() {
  // Read data
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  // Add a new item
  const { name, value } = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const newItem = { id: Date.now(), name, value };
  data.push(newItem);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function PUT(req) {
  // Edit an item
  const { id, name, value } = await req.json();
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Item not found" }), {
      status: 404,
    });
  }
  data[index] = { id, name, value };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify(data[index]), { status: 200 });
}

export async function DELETE(req) {
  // Delete an item
  const { id } = await req.json();
  let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data = data.filter((item) => item.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
