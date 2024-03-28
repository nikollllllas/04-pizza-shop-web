import { DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { DialogFooter, DialogHeader } from './ui/dialog'
import { Button } from './ui/button'

export function StoreProfileDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button type='button' variant={'ghost'}>
          Cancelar
        </Button>
        <Button type='submit' variant={'success'}>
          Salvar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
