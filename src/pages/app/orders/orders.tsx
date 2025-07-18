import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowRight, Search } from 'lucide-react'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilters } from './order-table-filters'
import { Pagination } from '@/components/pagination'

export const Orders = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Pedidos</h1>
    <div className='space-y-2.5'>
 <OrderTableFilters/>

        <div className='border rounded-md'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[64px]'></TableHead>
                        <TableHead  className='w-[140px]'>Identificador</TableHead>
                        <TableHead  className='w-[180px]'>Realizado há</TableHead>
                        <TableHead  className='w-[140px]'>Status</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead  className='w-[140px]'>Total do pedido</TableHead>
                        <TableHead className='w-[164px]'></TableHead>
                        <TableHead  className='w-[132px]'></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Button variant={'outline'} size={'xs'}>
                                <Search className='h-3 w-3'/>
                                <span className='sr-only'>Detalhes do pedido</span>
                            </Button>
                        </TableCell>
                        <TableCell className='font-mono text-xs font-medium'>w3w9123981</TableCell>
                        <TableCell className='text-muted-foreground'>há 15 minutos</TableCell>
                        <TableCell><div className='flex items-center gap-2'>
                            <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                            <span className='font-medium text-muted-foreground'>Pendente</span>
                            </div></TableCell>
                        <TableCell className='font-medium'>Leonardo Eiji Kina</TableCell>
                        <TableCell className='font-medium'>R$ 149,00</TableCell>
                        <TableCell><Button variant={'outline'} size={'xs'}><ArrowRight className='mr-2 h-3 w-3'/> Aprovar</Button></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
   {Array.from({ length: 10 }).map((_, i) => (
     <OrderTableRow key={i}/>
    ))}
                </TableBody>
            </Table>
    </div>
    <Pagination pageIndex={0} totalCount={105} perfPage={10}/>
        </div>
    </div>
    </>
  )
}
