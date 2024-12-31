const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function GET(req) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id'); // Check if `id` is provided in query parameters

    if (id) {
        // Fetch a single testimonial by ID
        const testimonial = await prisma.testimonial.findUnique({
            where: { id },
        });

        if (!testimonial) {
            return new Response(JSON.stringify({ error: "Testimonial not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(testimonial), { status: 200 });
    } else {
        // Fetch all testimonials
        const testimonials = await prisma.testimonial.findMany();
        return new Response(JSON.stringify(testimonials), { status: 200 });
    }
}
