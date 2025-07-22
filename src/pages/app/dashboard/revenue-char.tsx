import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export const RevenueChar = () => {
  return (
    <div>
        <Card className='col-span-4'>
            <CardHeader className='flex-row items-center justify-between pb-8'>
                <CardTitle className='text-base font-medium'>Receita no periodo</CardTitle>
                <CardDescription>Receita diaria no periodo</CardDescription>
            </CardHeader>
        </Card>
    </div>
  )
}
