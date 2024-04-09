import { HttpResponse, http } from 'msw'
import { GetPopularProductResponse } from '../get-popular-products'

export const getPopularProductMock = http.get<never, never, GetPopularProductResponse>(
  '/metrics/popular-products',
  () => {
    return HttpResponse.json([
      {
        product: 'Pizza 01',
        amount: 2
      },
      {
        product: 'Pizza 02',
        amount: 4
      },
      {
        product: 'Pizza 03',
        amount: 9
      },
      {
        product: 'Pizza 04',
        amount: 1
      },
      {
        product: 'Pizza 05',
        amount: 4
      },
      {
        product: 'Pizza 06',
        amount: 3
      },
      {
        product: 'Pizza 07',
        amount: 1
      },
    ])
  }
)
