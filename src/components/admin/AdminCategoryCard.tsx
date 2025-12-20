import { Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui"

export const AdminCategoryCard = () => {
  return (
    <div className='bg-card text-primary rounded-md shadow flex items-center justify-between px-5 py-3 outline-1 outline-border'>
      <p className="font-medium">Bebidas</p>
      <div className="flex gap-3 my-2">
        <Button variant='ghost' className="cursor-pointer p-3 rounded-full">
          <Edit2 />
        </Button>
        <Button variant='ghost' className="cursor-pointer p-3 rounded-full">
          <Trash2 />
        </Button>
      </div>
    </div>
  )
}
