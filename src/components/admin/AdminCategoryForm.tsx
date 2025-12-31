import { useEffect } from "react";
import { useCategories } from "@/hooks/useCategories";
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, ScrollArea } from "@/components/ui";
import { FormInput } from "../FormInput";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // mode?: 'create' | 'edit';
  id?: string;
}

export const AdminCategoryForm = ({ open, onOpenChange, id }: props) => {
  const { data: category } = useCategories.useGetById(id || '');

  useEffect(() => {
    if (!open) return
    console.log(category)
  }, [open, category])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className='flex max-h-[min(600px,90vh)] flex-col gap-0 p-0 sm:max-w-xl'
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4'>
            Editar Categoria
          </DialogTitle>
          <ScrollArea className='flex max-h-full flex-col overflow-hidden'>
            <form>
              <DialogDescription asChild>
                <div className="p-6">
                  <FormInput
                    id="name"
                    label="Nombre"
                    defaultValue={category?.payload?.name}
                  />
                </div>
              </DialogDescription>
              <DialogFooter className='px-6 pb-6 sm:justify-end'>
                <DialogClose asChild>
                  <Button type="button" variant='outline' className="cursor-pointer">
                    Salir
                  </Button>
                </DialogClose>
                <Button type='submit' className="cursor-pointer">
                  Actualizar Producto
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
