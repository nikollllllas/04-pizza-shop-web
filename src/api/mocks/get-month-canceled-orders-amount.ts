import { HttpResponse, http } from 'msw'
import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledAmountMock = http.get<never, never, GetMonthCanceledOrdersAmountResponse>(
  '/metrics/month-canceled-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 4,
      diffFromLastMonth: -5
    })
  }
)
