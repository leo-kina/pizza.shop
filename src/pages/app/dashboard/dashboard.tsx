
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import React from 'react'
import { MonthCard } from './month-card'
import { MonthCardAmount } from './month-card-amount'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceldAmountCard } from './month-canceld-amount-card'
import { RevenueChar } from './revenue-char'
import { PopularProducts } from './popular-products'

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
      <div className='grid grid-cols-4 gap-4'>
    <MonthCard/>
    <MonthCardAmount/>
    <DayOrdersAmountCard/>
    <MonthCanceldAmountCard/>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <RevenueChar/>
        <PopularProducts/>
      </div>
    </div>
  )
}
