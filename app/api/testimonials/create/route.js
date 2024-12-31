const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function POST(req) {
    const { name, review, rating, position, image } = await req.json();

    const parsedRating = parseInt(rating);

    const newTestimonial = await prisma.testimonial.create({
        data: {
            name,
            review,
            rating: parsedRating,  // Pass the parsed integer
            position,
            image,
        },
    });

    return new Response(JSON.stringify(newTestimonial), { status: 201 });
}
