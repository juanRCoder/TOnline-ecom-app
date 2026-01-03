import { useState } from "react"
import { Edit2, Trash2 } from "lucide-react"
import { useQueryClient } from "@tanstack/react-query"
import type { CategoryType } from "@/types/categories.type"
import { AdminCategoryForm } from "./AdminCategoryForm"
import { useCategories } from "@/hooks/useCategories"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type props = {
  category: CategoryType
}

export const AdminCategoryCard = ({ category }: props) => {
  const queryClient = useQueryClient();

  const [modalForm, setModalForm] = useState<boolean>(false)
  
  const { mutate: remove } = useCategories.useRemove({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["allCategories"],
        });
      },
      onError: (message) => {
        console.error("Error deleted product:", message);
      },
    })

  return (
    <Card className='flex flex-row items-center justify-between px-4 py-2'>
      <p className="font-medium">{category.name}</p>
      <CardContent className="flex px-0">
        <Button onClick={() => setModalForm(true)} variant='ghost' className="h-16 w-16 cursor-pointer rounded-full">
          <Edit2 className="text-foreground size-5" />
        </Button>
        <Button onClick={() => remove(category.id || '')} variant='ghost' className="h-16 w-16 cursor-pointer rounded-full">
          <Trash2 className="text-destructive size-5" />
        </Button>
      </CardContent>
      <AdminCategoryForm open={modalForm} onOpenChange={setModalForm} mode="edit" id={category.id} />
    </Card>
  )
}
