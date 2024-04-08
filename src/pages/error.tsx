import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-bold'>Epa... Algo deu errado...</h1>
      <p className='text-accent-foreground mb-1'>Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:</p>

      <pre>{error?.message || JSON.stringify(error)}</pre>

      <p className='text-accent-foreground mt-1'>
        Voltar para o{' '}
        <Link
          to={'/'}
          className='text-sky-600'>
          Dashboard
        </Link>
      </p>
    </div>
  )
}
