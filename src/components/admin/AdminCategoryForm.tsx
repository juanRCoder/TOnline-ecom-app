import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useCategories } from "@/hooks/useCategories";
import { FormInput } from "../FormInput";
import { schemaCategoryForm, type TypeCategoryForm } from "@/schemas/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultCategoryForm } from "@/lib/default";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode?: 'create' | 'edit';
  id?: string;
}

export const AdminCategoryForm = ({ open, onOpenChange, mode = 'create', id }: props) => {
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
  const { mutate: create } = useCategories.useCreate({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allCategories"],
      });
      onOpenChange(false);
    },
    onError: (message) => {
      console.error("Error creating product:", message);
    },
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
    if (mode === 'edit' && id) update({ data, id });
    else create(data)
  }

  // lyfecicle
  useEffect(() => {
    if (!open) return
    if (mode !== 'edit') return
    if (!category) return
    reset({
      name: category.payload.name
    })
  }, [open, category, reset, mode])

  useEffect(() => {
    if (!open) {
      reset(defaultCategoryForm);
    };
  }, [open, reset]);

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
                  {mode === 'create' ? 'Crear' : 'Actualizar'} Categoria
                </Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
