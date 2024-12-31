const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export async function PUT(req) {
    const { id, name, review, rating, position, image } = await req.json();

    const parsedRating = parseInt(rating);

    const updatedTestimonial = await prisma.testimonial.update({
        where: { id },
        data: {
            name,
            review,
            rating: parsedRating, // Update the parsed integer
            position,
            image,
        },
    });

    return new Response(JSON.stringify(updatedTestimonial), { status: 200 });
}
