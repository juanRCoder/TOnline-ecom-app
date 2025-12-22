import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminProductCard } from "@/components/admin/AdminProductCard"
import { AdminProductForm } from "@/components/admin/AdminProductForm"
import { Button } from "@/components/ui"
import { useProducts } from "@/hooks/useProducts"
import type { ProductType } from "@/types/products.type"

const ProductsAdmin = () => {
  const navigate = useNavigate()
  const [modalForm, setModalForm] = useState<boolean>(false)

  const {
    data: allProducts,
    isLoading: loadingAll,
    error: errorAll
  } = useProducts.AllProducts("", true);

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className='bg-background text-foreground flex p-4 border-b'>
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Productos</h2>
      </div>
      {/* CONTENT */}
      {loadingAll && (
        <div className="flex-1 flex flex-col px-3 gap-5 py-10">
          <span className="block border-5 border-l-transparent w-12 h-12 rounded-full animate-spin" />
          <span>Cargando productos...</span>
        </div>
      )}
      {errorAll && (
        <div className="flex-1 flex flex-col px-3 gap-5 py-10">
          <span className="text-destructive">{errorAll.message}</span>
        </div>
      )}
      {!loadingAll && !errorAll && (
        <div className="flex-1 flex flex-col px-3 gap-5 py-10">
          {allProducts?.payload.map((product: ProductType) => (
            <AdminProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className="sticky bottom-6 px-6 flex justify-end">
        <Button onClick={() => setModalForm(true)} className="rounded-full h-16 w-16 cursor-pointer bg-primary">
          <Plus className="size-8" />
        </Button>
      </div>
      <AdminProductForm open={modalForm} onOpenChange={setModalForm} />
    </AdminLayout>
  )
}

export default ProductsAdmin
