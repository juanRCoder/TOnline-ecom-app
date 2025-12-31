import { Edit2, Trash2 } from "lucide-react"
import { Button, Card, CardContent } from "@/components/ui"
import type { CategoryType } from "@/types/categories.type"
import { capitalize } from "@/lib/utils"
import { AdminCategoryForm } from "./AdminCategoryForm"
import { useState } from "react"

type props = {
  category: CategoryType
}

export const AdminCategoryCard = ({ category }: props) => {
  const [modalForm, setModalForm] = useState<boolean>(false)
  
  return (
    <Card className='flex flex-row items-center justify-between px-4 py-2'>
      <p className="font-medium">{capitalize(category.name)}</p>
      <CardContent className="flex px-0">
        <Button onClick={() => setModalForm(true)} variant='ghost' className="h-16 w-16 cursor-pointer rounded-full">
          <Edit2 className="text-foreground size-5" />
        </Button>
        <Button variant='ghost' className="h-16 w-16 cursor-pointer rounded-full">
          <Trash2 className="text-destructive size-5" />
        </Button>
      </CardContent>
      <AdminCategoryForm open={modalForm} onOpenChange={setModalForm} id={category.id} />
    </Card>
  )
}
