const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

// Create a Testimonial
export const createTestimonial = async (prisma, name, review, rating, position, image) => {
    return await prisma.testimonial.create({
        data: {
            name,
            review,
            rating,
            position,
            image,
        },
    });
};

// Get All Testimonials
export const getAllTestimonials = async (prisma) => {
    return await prisma.testimonial.findMany();
};

// Get Testimonial by ID
export const getTestimonialById = async (prisma, id) => {
    return await prisma.testimonial.findUnique({
        where: {
            id,
        },
    });
};

// Update a Testimonial by ID
export const updateTestimonialById = async (prisma, id, data) => {
    return await prisma.testimonial.update({
        where: {
            id,
        },
        data,
    });
};

// Delete a Testimonial by ID
export const deletedTestimonial = async (prisma, id) => {
    return await prisma.testimonial.delete({
        where: {
            id,
        },
    });
};
