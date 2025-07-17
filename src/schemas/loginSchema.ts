import { z } from 'zod'
export const signInForm = z.object({
    email: z.email()
})