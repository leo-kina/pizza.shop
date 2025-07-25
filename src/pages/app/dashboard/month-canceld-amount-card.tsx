import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import React from 'react'

export const MonthCanceldAmountCard = () => {
  return (
    <div>
                        <Card>
          <CardHeader className='flex-row flex space-y-0 items-center justify-between pb-2'>
            
            <CardTitle className='text-base font-semibold'>Cancelamentos (mes) </CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground'/>
          </CardHeader>
          <CardContent className='space-y-1'>
        <span className='text-2xl font-bold tracking-tight'>23</span>
        <p className='text-xs text-muted-foreground'>
          <span className='text-emerald-500 dark:text-emerald-400'>-6%</span>{'  '} em relacao ao mes passado
        </p>
          </CardContent>
        </Card>
    </div>
  )
}
