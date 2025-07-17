import {z} from 'zod'
export const signUpForm = z.object({
    email: z.email(),
    managerName: z.string(),
    restaurantName: z.string(),
    phone: z.string()
})