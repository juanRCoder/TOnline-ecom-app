import { useState } from "react"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminCategoryCard } from "@/components/admin/AdminCategoryCard"
import { Button } from "@/components/ui/button"
import { useCategories } from "@/hooks/useCategories"
import type { CategoryType } from "@/types/categories.type"
import { AdminCategoryForm } from "@/components/admin/AdminCategoryForm"
import { Plus } from "lucide-react"


const AdminCategories = () => {
  const [modalForm, setModalForm] = useState<boolean>(false)
  const { data: allCategories } = useCategories.useGetAll()

  return (
    <AdminLayout title="Categorias" path="/admin/dashboard">
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