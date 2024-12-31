import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create a User
export const createUser = async (prisma, email, name = null) => {
    return await prisma.user.create({
        data: {
            email,
            name,
        },
    });
};

// Get All Users
export const getAllUsers = async (prisma) => {
    return await prisma.user.findMany();
};

// Get a Single User by ID
export const getUserById = async (prisma, id) => {
    return await prisma.user.findUnique({
        where: {
            id,
        },
    });
};

// Get a Single User by Email
export const getUserByEmail = async (prisma, email) => {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
};

// Update a User by ID
export const updateUserById = async (prisma, id, data) => {
    return await prisma.user.update({
        where: {
            id,
        },
        data, // Pass an object with fields to update (e.g., { name: "New Name" })
    });
};

// Delete a User by ID
export const deleteUserById = async (prisma, id) => {
    return await prisma.user.delete({
        where: {
            id,
        },
    });
};

// Filter Users by Name
export const filterUsersByName = async (prisma, name) => {
    return await prisma.user.findMany({
        where: {
            name: {
                contains: name, // Partial match
                mode: 'insensitive', // Case-insensitive
            },
        },
    });
};

// Paginate Users
export const paginateUsers = async (prisma, skip, take) => {
    return await prisma.user.findMany({
        skip, // Number of records to skip
        take, // Number of records to fetch
    });
};

// Count Users
export const countUsers = async (prisma) => {
    return await prisma.user.count();
};

// Sort Users by Name
export const sortUsersByName = async (prisma, order = 'asc') => {
    return await prisma.user.findMany({
        orderBy: {
            name: order, // Use 'asc' for ascending or 'desc' for descending
        },
    });
};
