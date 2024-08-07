import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(user){
    try {
        const newUser = await prisma.user.create({data: user})
    } catch (e) {
        console.error(e);
    }
}
