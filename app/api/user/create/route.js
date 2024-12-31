const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export async function POST(req) {
    const { email, name } = await req.json();

    const newUser = await prisma.user.create({
        data: { email, name },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
}
