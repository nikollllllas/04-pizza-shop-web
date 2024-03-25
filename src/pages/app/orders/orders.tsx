import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilters } from './order-table-filters'
import { Pagination } from '@/components/pagination'

export function Orders() {
  return (
    <>
      <Helmet title='Pedidos' />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Pedidos</h1>

        <div className='space-y-2.5'>
          <OrderTableFilters />

          <div className='rounded-md border'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-16'></TableHead>
                  <TableHead className='w-[140px]'>Identificador</TableHead>
                  <TableHead className='w-[180px]'>Realizado há</TableHead>
                  <TableHead className='w-[140px]'>Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className='w-[140px]'>Total do Pedido</TableHead>
                  <TableHead className='w-[164px]'></TableHead>
                  <TableHead className='w-[132px]'></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={101} perPage={10} />
        </div>
      </div>
    </>
  )
}
