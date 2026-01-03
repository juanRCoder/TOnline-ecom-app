import { ArrowLeft, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminCategoryCard } from "@/components/admin/AdminCategoryCard"
import { Button } from "@/components/ui/button"
import { useCategories } from "@/hooks/useCategories"
import type { CategoryType } from "@/types/categories.type"
import { AdminCategoryForm } from "@/components/admin/AdminCategoryForm"
import { useState } from "react"


const AdminCategories = () => {
  const navigate = useNavigate()
  const [modalForm, setModalForm] = useState<boolean>(false)

  const { data: allCategories } = useCategories.useGetAll()

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className='bg-background text-foreground flex p-4 border-b'>
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Categorias</h2>
      </div>
      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-3 gap-5 py-10">
        {allCategories?.payload?.map((ct: CategoryType) => (
          <AdminCategoryCard key={ct.id} category={ct} />
        ))}
      </div>
      <div className="sticky bottom-6 px-6 flex justify-end">
        <Button onClick={() => setModalForm(true)} className="rounded-full h-16 w-16 cursor-pointer bg-primary">
          <Plus className="size-8" />
        </Button>
      </div>
      <AdminCategoryForm open={modalForm} onOpenChange={setModalForm} />
    </AdminLayout>
  )
}

export default AdminCategories