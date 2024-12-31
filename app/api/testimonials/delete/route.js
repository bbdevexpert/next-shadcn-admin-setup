const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export async function DELETE(req) {
    const { id } = await req.json();

    const deletedTestimonial = await prisma.testimonial.delete({
        where: { id },
    });

    return new Response(JSON.stringify(deletedTestimonial), { status: 200 });
}
