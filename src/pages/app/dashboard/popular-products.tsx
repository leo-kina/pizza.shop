import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from 'lucide-react'
import React from 'react'
import {ResponsiveContainer, Pie,  PieChart, Cell,  } from 'recharts'

export const PopularProducts = () => {
  const data = [
    {product: 'Pepperoni' , amount:23},
    {product: 'Mussarela' , amount:12},
    {product: '4 Queijos' , amount:39},
    {product: 'Frango Catupiry' , amount:50},
    {product: 'Calabresa' , amount:13},

  ]
const COLORS = [
  '#0ea5e9', // sky-500
  '#f59e0b', // amber-500
  '#8b5cf6', // violet-500
  '#10b981', // emerald-500
  '#f43f5e', // rose-500
]

  return (
    <div>
        <Card className='col-span-3'>
            <CardHeader className='pb-8'>
                <div className='flex items-center justify-between'>
                <CardTitle className='text-base font-medium'>Produtos populares</CardTitle>
                <BarChart className='h-4 w-4 text-muted-foreground'/>
                </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width={"100%"} height={240}>
                <PieChart style={{fontSize:12}} >
        <Pie data={data}
         dataKey={"amount"}
          nameKey={'product'}
           cx={'50%'}
            cy={'50%'}
            outerRadius={86}
        innerRadius={64}
        strokeWidth={8}
        labelLine={false}
label={({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  value = 0,
  index = 0,
}) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-xs"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {data[index].product.length > 12
        ? data[index].product.substring(0, 12).concat('...')
        : data[index].product}{' '}
      ({value})
    </text>
  )
}}

>{data.map((_, index) =>{
    return(
       <Cell key={`cell-${index}`}fill={COLORS[index]} className='stroke-background hover:opacity-80 ' />
    )
})}
    </Pie>
        
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
            
        </Card>
        
    </div>
  )
}
