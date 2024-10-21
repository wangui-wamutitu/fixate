import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if(process.env.NODE_ENV !== 'production'){
    globalForPrisma.prisma = prisma
}

//this is simply done by instantiating a new PrismaClient
//export const prisma = new PrismaClient()