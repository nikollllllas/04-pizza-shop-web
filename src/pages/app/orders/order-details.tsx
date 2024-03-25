import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 1209asmdf23f9</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>

      <div className='space-y-6'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='text-muted-foreground'>Status</TableCell>
              <TableCell className='flex justify-end'>
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                  <span className='font-medium text-muted-foreground'>Pendente</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Cliente</TableCell>
              <TableCell className='flex justify-end'>Nikollas Ohta</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Telefone</TableCell>
              <TableCell className='flex justify-end'>(44)99999-9119</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>E-mail</TableCell>
              <TableCell className='flex justify-end'>nikollas@email.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Realizado há</TableCell>
              <TableCell className='flex justify-end'>há 2 minuto(s)</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className='text-right'>Qtd.</TableHead>
              <TableHead className='text-right'>Preço</TableHead>
              <TableHead className='text-right'>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Calabresa GG</TableCell>
              <TableHead className='text-right'>2</TableHead>
              <TableHead className='text-right'>R$ 89,90</TableHead>
              <TableHead className='text-right'>R$ 179,80</TableHead>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Chocolate Brotinho</TableCell>
              <TableHead className='text-right'>2</TableHead>
              <TableHead className='text-right'>R$ 29,90</TableHead>
              <TableHead className='text-right'>R$ 59,80</TableHead>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido:</TableCell>
              <TableCell className='text-right font-medium'>R$ 239,60</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
