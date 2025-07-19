import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import React from 'react'

export const OrderTableRow = () => {
  return (

         <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
          <Button variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
          </DialogTrigger>
          </Dialog>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">w0938129w9wws0</TableCell>
        <TableCell className="text-muted-foreground">há 2 horas</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="font-medium text-muted-foreground">Pendente</span>
          </div>
        </TableCell>
        <TableCell className="font-medium">Cliente </TableCell>
        <TableCell className="font-medium">R$1900,00</TableCell>
        <TableCell>
          <Button variant="outline" size="xs">
            <ArrowRight className="mr-2 h-3 w-3" /> Aprovar
          </Button>
          
        </TableCell>
        <TableCell>        
            <Button variant="outline" size="xs">
            <X className="mr-2 h-3 w-3" /> Cancelar
          </Button></TableCell>
      </TableRow>
  )
}
