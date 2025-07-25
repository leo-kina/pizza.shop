import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

export const OrdersDetials = () => {
  return (
    <div>
     <DialogContent>
         <DialogHeader>
            <DialogTitle>Pedido: 312321w32131</DialogTitle>
            <DialogDescription>Detalhes do pedido</DialogDescription>
         </DialogHeader>
         <div className='space-y-6'>
            <Table>
                <TableBody>
                <TableRow>
<TableCell className='text-muted-foreground'>Status</TableCell>
<TableCell className='flex justify-end'>          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div></TableCell>
                </TableRow>
                                <TableRow>
<TableCell className='text-muted-foreground'>Cliente</TableCell>
<TableCell className='flex justify-end'>          <div className="flex items-center gap-2">
       Leonardo Eiji Kina
          </div></TableCell>
                </TableRow>
                              <TableRow>
<TableCell className='text-muted-foreground'>Telefone</TableCell>
<TableCell className='flex justify-end'>          <div className="flex items-center gap-2">
       (11)999039130
          </div></TableCell>
                </TableRow>
                              <TableRow>
<TableCell className='text-muted-foreground'>E-mail</TableCell>
<TableCell className='flex justify-end'>          <div className="flex items-center gap-2">
       leonardokina18@gmail.com
          </div></TableCell>
                </TableRow>
                              <TableRow>
<TableCell className='text-muted-foreground'>Realziado há</TableCell>
<TableCell className='flex justify-end'>          <div className="flex items-center gap-2">
       3 minutos
          </div></TableCell>
                </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Produtos</TableHead>
                        <TableHead className='text-right'>Qtd.</TableHead>
                        <TableHead className='text-right'>Preco</TableHead>
                        <TableHead className='text-right'>Subtotal</TableHead>
                
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Pizza Pepperoni Familia</TableCell>
                        <TableCell className='text-right'>2</TableCell>
                        <TableCell className='text-right'>R$ 59,99</TableCell>
                        <TableCell className='text-right'>R$ 119,98</TableCell>
                    </TableRow>
                                        <TableRow>
                        <TableCell>Pizza 4Queijo </TableCell>
                        <TableCell className='text-right'>2</TableCell>
                        <TableCell className='text-right'>R$ 79,99</TableCell>
                        <TableCell className='text-right'>R$ 159,98</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell className='text-right font-medium'>R$ 279,96</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
         </div>
     </DialogContent>
    </div>
  )
}
