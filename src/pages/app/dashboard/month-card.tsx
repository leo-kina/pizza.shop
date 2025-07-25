import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import React from 'react'

export const MonthCard = () => {
  return (
    <div>
                <Card>
          <CardHeader className='flex-row flex space-y-0 items-center justify-between pb-2'>
            
            <CardTitle className='text-base font-semibold'>Receita total (mes) </CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground'/>
          </CardHeader>
          <CardContent className='space-y-1'>
        <span className='text-2xl font-bold tracking-tight'>R$ 1200,00</span>
        <p className='text-xs text-muted-foreground'>
          <span className='text-emerald-500 dark:text-emerald-400'>+2%</span>{'  '} em relacao ao mes passado
        </p>
          </CardContent>
        </Card>
    </div>
  )
}
