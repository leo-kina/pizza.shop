import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { signInForm } from '@/schemas/signSchema'
import { toast } from 'sonner'
import {Link} from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'
export const Signin = () => {
  type SignFormDate = z.infer<typeof signInForm>
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } 
  = useForm<SignFormDate>()
const {mutateAsync: authenticate} = useMutation({
  mutationFn: signIn,
})
 async function handleSignin (data:SignFormDate){
      await authenticate({email:data.email})
try{
    console.log(data)
    toast.success("Enviamos um link de autentificacao para seu e-mail.",{
      action:{
        label:'Reenviar',
        onClick:() =>handleSignin(data)
      }
    })


}catch{

    toast.error("Enviamos um link de autentificacao para seu e-mail.")

    console.log(data)
}

  }
  return (
    <div>
      <div className='p-8'>
        <Button variant={'ghost'} asChild className='absolute right-8 top-8'> 
        <Link to='/sign-up' className=''>
        Novo estabelecimento</Link>
        </Button>
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
