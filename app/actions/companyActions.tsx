"use server"

import { prisma } from "../../utils/prisma"
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import type { Company } from '@prisma/client'

const passwordSchema = z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be have a minimum of 8 characters and a maximum of 20 characters'
    })
  .min(8, { message: "Password must be at least 8 characters" })
  .max(20, {message: "Password must be at most 20 characters"})
  .refine((val) => /[A-Z]/.test(val), { message: "Must contain at least one uppercase letter" })
  .refine((val) => /[a-z]/.test(val), { message: "Must contain at least one lowercase letter" })
  .refine((val) => /[0-9]/.test(val), { message: "Must contain at least one digit" })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: 'Add special characters like, [!@#$%^&*]',
  })


// Define a schema for the company using Zod
const companySchema = z.object({
    name: z.string({
        required_error: "Company name is required"
    }).min(2).max(255),
    appUrl: z.string({
        required_error: "Company site url/app store url is required"
    }).url(),
    logo:z.string().url(),
    email: z.string({
        required_error: 'Email is required'
    }).email({ message: "Invalid email address" }),
    description: z.string().min(2).max(4000),
    password: passwordSchema,
    confirmPassword: passwordSchema
}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });
// Define an interface for the form state
interface CompanyFormState {
    errors: {
        name?: string[],
        appUrl?: string[],
        logo?: string[],
        email?: string[],
        description?: string[],
        password?: string[],
        confirmPassword?: string[],
        _form?: string[],
    }
}
export async function createCompany(
    formData: FormData,
    formState: CompanyFormState
){

    const result = companySchema.safeParse({
        name: formData.get('name'),
        appUrl: formData.get('appUrl'),
        email: formData.get('email'),
        description: formData.get('description'),
        logo: formData.get('logo'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    })

    // If validation fails, return the errors
    if (!result.success) {
        return {
            // The flatten method is used to convert the validation errors into a flat object structure 
            // that can be easily displayed in the form.
            errors: result.error.flatten().fieldErrors
        }
    }

    // let company:Company
    try {
        // If validation passes, create a new post in the database
        //first hash the password

        // company = 
        await prisma.company.create({
            data: {
                name: result.data.name,
                appUrl: result.data.appUrl,
                logo: result.data.logo,
                email: result.data.email,
                description: result.data.description,
                password: result.data.password
            }
        })
    } catch (error: unknown) {
        // If there's an error, return it
        if (error instanceof Error) {
            return {
                errors: {
                    _form: [error.message],
                },
            }
        }
        else {
            return {
                errors: {
                    _form: ['Something went wrong'],
                },
            }
        }
    }

    // Revalidate the path to fetch latest data
    revalidatePath('/company')
}