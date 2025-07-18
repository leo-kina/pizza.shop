import { Pizza } from 'lucide-react'
import React from 'react'

export const Header = () => {
  return (
    <div className='border-b'>
        <div className='flex h-16 items-center gap-6 px-6'>
            <Pizza className='h-6 w-6'/>
            
        </div>
    </div>
  )
}
