import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { signUpForm } from '@/schemas/signupSchema'
import { toast } from 'sonner'
import {Link, useNavigate} from 'react-router-dom'
export const SignUp = () => {
    const navigate = useNavigate()
  type SignUpFormDate = z.infer<typeof signUpForm>
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } 
  = useForm<SignUpFormDate>()

 async function handleSignUp (data:SignUpFormDate){
      await new Promise(resolve => setTimeout(resolve,2000))
try{

console.log(data)
    toast.success("Restaurante cadastrado com sucesso",{
      action:{
        label:'Login',
        onClick:() =>navigate('/sign-in')
      }
    })
}catch{

    toast.error("Erro ao cadastrar restaurante ")

    console.log(data)
}

  }
  return (
    <div>
      <div className='p-8'>
                <Button variant={'ghost'} asChild className='absolute right-8 top-8'> 
        <Link to='/sign-in' className=''>
        Fazer login</Link>
        </Button>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
    <div className='flex flex-col gap-2 text-center'>
      <h1 className='text-2xl font-semibold tracking-tight'>Criar conta grátis</h1>
      <p className='text-sm text-muted-foreground'>Seja um parceiro e comece suas vendas</p>
    </div>
    <form className='space-y-4' onSubmit={handleSubmit(handleSignUp)}>
      <div className='space-y-2'>
    <Label htmlFor='restaurantName'>Nome do estabelcimento</Label>
    <Input id='restaurantName' type='text' {... register('restaurantName')}></Input>
      </div>      <div className='space-y-2'>
    <Label htmlFor='managerName'>Seu nome</Label>
    <Input id='managerName' type='text' {... register('managerName')}></Input>
      </div>      <div className='space-y-2'>
    <Label htmlFor='email'>Seu e-mail</Label>
    <Input id='email' type='email' {... register('email')}></Input>
      </div>      <div className='space-y-2'>
    <Label htmlFor='phone'>Seu celular</Label>
    <Input id='phone' type='tell' {... register('phone')}></Input>
      </div>
      <Button type='submit' className='w-full' disabled={isSubmitting}>Finalizar cadastros</Button>
      <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>Ao continuar, voce concorda com nossos <a className='underline underline-offset-4' href="">termos de servico</a> e <a className='underline underline-offset-4' href="">politicas de privacidade</a></p>
    </form>
        </div>

      </div>
    </div>
  )
}
