import type { Company } from '@prisma/client' // Importing the Company type from the Prisma client library.
import { prisma } from '../../utils/prisma'
import { notFound } from 'next/navigation' // Importing the notFound function from Next.js for handling 404 errors.


export async function fetchCompanyById(id: string): Promise<Company | null> { // Function to fetch a single company by its ID.
    const company = await prisma.company.findFirst({
        where: {
            id
        }
    })

    if (!company) {
        notFound() // If the post is not found, a 404 error is thrown.
    }

    return company
}