import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'

export const AccountMenu = () => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button value='outline' className='flex items-center gap-2 select-none'>
                    Pizza Shop 
                    <ChevronDown className='w-4 h-4'/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel className='flex flex-col'>
    <span>Leonardo Kina</span>
    <span className='text-sm font-normal text-muted-foreground'>leonardokina18@gmail.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
              
    <DropdownMenuItem>  <Building className='w-4 h-4 mr-2'/><span>Perfil da loja</span></DropdownMenuItem>
     <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>  <LogOut className='w-4 h-4 mr-2'/><span>Sair</span></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}
