import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, CartesianGrid, Line, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  { date: '21/03', revenue: 800 },
  { date: '22/03', revenue: 120 },
  { date: '23/03', revenue: 2000 },
  { date: '24/03', revenue: 500 },
  { date: '25/03', revenue: 460 },
  { date: '26/03', revenue: 950 },
  { date: '27/03', revenue: 1540 }
]

export function RevenueChart() {
  return (
    <Card className='col-span-6'>
      <CardHeader className='flex-row items-center justify-between pb-8'>
        <div className='space-y-1'>
          <CardTitle className='text-base font-medium'>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid vertical={false} className='stroke-muted' />

            <Line type={'linear'} strokeWidth={2} dataKey={'revenue'} stroke={colors.violet[500]} />

            <XAxis dataKey={'date'} tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke='#888'
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
