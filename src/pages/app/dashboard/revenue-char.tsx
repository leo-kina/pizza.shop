import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid} from 'recharts'

export const RevenueChar = () => {
  const data = [
    {date: '21/06' , revenue:1200},
    {date: '22/06' , revenue:200},
    {date: '23/06' , revenue:100},
    {date: '24/06' , revenue:2200},
    {date: '25/06' , revenue:9200},
    {date: '26/06' , revenue:130},
    {date: '27/06' , revenue:1550},
  ]
  return (
    <div>
        <Card className='col-span-4'>
            <CardHeader className='flex-row items-center justify-between pb-8'>
              <div className='space-y-1'>
                <CardTitle className='text-base font-medium'>Receita no periodo</CardTitle>
                <CardDescription>Receita diaria no periodo</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width={"100%"} height={240}>
                <LineChart style={{fontSize:12}} data={data}>
                  <XAxis dataKey={'date'} tickLine={false} axisLine={false} dy={16}/>
                  <YAxis width={80} stroke='#888' axisLine={false} tickLine={false} tickFormatter={(value:number) => value.toLocaleString('pt-BR',{style : 'currency',currency: 'BRL'})}/>

                  <Line type={'linear'} strokeWidth={2} dataKey={'revenue'} stroke={'#7b45df'}/>
                  <CartesianGrid vertical={false} className='stroke-muted'/>
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            
        </Card>
        
    </div>
  )
}
