import { ArrowLeft, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminProductCard } from "@/components/admin/AdminProductCard"
import { Button } from "@/components/ui/button"
import { AdminProductForm } from "@/components/admin/AdminProductForm"
import { useState } from "react"


const ProductsAdmin = () => {
  const navigate = useNavigate()
  const [modalForm, setModalForm] = useState<boolean>(false)

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className='bg-background text-foreground flex p-4 border-b'>
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Productos</h2>
      </div>
      {/* CONTENT */}
      <div className="flex-1 flex flex-col px-3 gap-5 py-10">
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </div>
      <div className="sticky bottom-6 px-6 flex justify-end">
        <Button onClick={() => setModalForm(true)}className="rounded-full h-16 w-16 cursor-pointer bg-primary">
          <Plus className="size-8" />
        </Button>
      </div>
      <AdminProductForm open={modalForm} onOpenChange={setModalForm} />
    </AdminLayout>
  )
}

export default ProductsAdmin
