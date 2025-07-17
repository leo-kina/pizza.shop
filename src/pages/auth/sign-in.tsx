import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { signInForm } from '@/schemas/signSchema'
import { toast } from 'sonner'
export const Signin = () => {
  type SignFormDate = z.infer<typeof signInForm>
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } 
  = useForm<SignFormDate>()

 async function handleSignin (data:SignFormDate){

  await new Promise(resolve => setTimeout(resolve,2000))
    toast.success("Enviamos um link de autentificacao para seu e-mail.")

    console.log(data)
  }
  return (
    <div>
      <div className='p-8'>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
    <div className='flex flex-col gap-2 text-center'>
      <h1 className='text-2xl font-semibold tracking-tight'>Acessar painel</h1>
      <p className='text-sm text-muted-foreground'>Acompanhe suas vendas pelo painel do parceiro!</p>
    </div>
    <form className='space-y-4' onSubmit={handleSubmit(handleSignin)}>
      <div className='space-y-2'>
    <Label htmlFor='email'>Seu e-mail</Label>
    <Input id='email' type='email' {... register('email')}></Input>
      </div>
      <Button type='submit' className='w-full' disabled={isSubmitting}>Acessar painel</Button>
    </form>
        </div>

      </div>
    </div>
  )
}
