import { useState } from "react"
import { Plus } from "lucide-react"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminProductCard } from "@/components/admin/AdminProductCard"
import { AdminProductForm } from "@/components/admin/AdminProductForm"
import { Button } from "@/components/ui/button"
import { useProducts } from "@/hooks/useProducts"
import type { ProductType } from "@/types/products.type"

const ProductsAdmin = () => {
  const [modalForm, setModalForm] = useState<boolean>(false)

  const {
    data: allProducts,
    isLoading: loadingAll,
    error: errorAll
  } = useProducts.useGetAll("", true);

  return (
    <AdminLayout title="Productos" path="/admin/dashboard">
      <section className='container mx-auto py-4'>
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
      </section>
    </AdminLayout>
  )
}

export default ProductsAdmin
