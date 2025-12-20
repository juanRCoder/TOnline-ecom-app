import { Button } from "../ui/button"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Dialog } from "../ui/dialog"
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


export const AdminProductForm = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='flex max-h-[min(600px,90vh)] flex-col gap-0 p-0 sm:max-w-xl '>
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4'>Nuevo Producto</DialogTitle>
          <ScrollArea className='flex max-h-full flex-col overflow-hidden'>
            <DialogDescription asChild>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Nombre</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>Precio</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>Stock</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>Estado</FieldLabel>
                  <Select defaultValue="available">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="Disponible" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Disponible</SelectItem>
                      <SelectItem value="unavailable">Agotado</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>Categoría</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bebidas">Bebidas</SelectItem>
                      <SelectItem value="Snacks">Snacks</SelectItem>
                      <SelectItem value="Dulces">Dulces</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                {/* ACA COLOCALO ASI NOMAS PARA SUBIR LA IMAGEN Y PREVISUALIZAR */}
              </div>
            </DialogDescription>
            <DialogFooter className='px-6 pb-6 sm:justify-end'>
              <DialogClose asChild>
                <Button variant='outline'>
                  Salir
                </Button>
              </DialogClose>
              <Button type='button'>Crear Producto</Button>
            </DialogFooter>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
