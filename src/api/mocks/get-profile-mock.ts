import { HttpResponse, http } from 'msw'
import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'Nikollas Ohta',
    email: 'nikollas@email.com',
    phone: '44999999999',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null
  })
})
