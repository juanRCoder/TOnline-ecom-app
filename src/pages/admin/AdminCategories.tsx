import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminCategoryCard } from "@/components/admin/AdminCategoryCard"
import { Button } from "@/components/ui/button"


const AdminCategories = () => {
  const navigate = useNavigate()
  return (
    <AdminLayout>
      {/* HEADER */}
      <div className='bg-background text-foreground flex p-4 border-b'>
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Categorias</h2>
      </div>
      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-3 gap-5 py-10">
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
        <AdminCategoryCard />
      </div>
      <div className="px-3">
        <Button className="cursor-pointer w-full my-4 py-5">
          + Anadir Nueva Categoria
        </Button>
      </div>
    </AdminLayout>
  )
}

export default AdminCategories