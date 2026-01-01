import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useCategories } from "@/hooks/useCategories";
import { FormInput } from "../FormInput";
import { schemaCategoryForm, type TypeCategoryForm } from "@/schemas/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultCategoryForm } from "@/lib/default";
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, ScrollArea } from "@/components/ui";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // mode?: 'create' | 'edit';
  id?: string;
}

export const AdminCategoryForm = ({ open, onOpenChange, id }: props) => {
  // hooks
  const queryClient = useQueryClient();
  const { data: category } = useCategories.useGetById(id || '');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeCategoryForm>({
    resolver: zodResolver(schemaCategoryForm),
    defaultValues: defaultCategoryForm
  })
  const { mutate: update } = useCategories.useUpdate({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCategories"] });
      queryClient.invalidateQueries({ queryKey: ["getCategoryById", id] });
      onOpenChange(false)
    },
    onError: (message) => {
      console.error("Error updating product:", message);
    }
  })

  // methods
  const onSubmit = (data: TypeCategoryForm) => {
    update({ data, id: id || '' })
  }

  // lyfecicle
  useEffect(() => {
    if (!open) return
    if (!category) return
    reset({
      name: category.payload.name
    })
  }, [open, category, reset])

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogDescription asChild>
                <div className="p-6">
                  <FormInput
                    id="name"
                    label="Nombre"
                    {...register("name")}
                    error={errors.name?.message}
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
                  Actualizar Categoria
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
