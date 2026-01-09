import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminOrderCard } from "@/components/admin/AdminOrderCard"
import { Button } from "@/components/ui/button"
import { useOrders } from "@/hooks/useOrders"
import type { OrderType } from "@/types/orders.type"

const AdminOrders = () => {
  const { data: allOrders } = useOrders.useGetAll()

  return (
    <AdminLayout title="Ordenes" path="/admin/dashboard">
      <div className="sticky z-50 top-16 bg-sidebar text-primary">
        <div className="container mx-auto flex justify-evenly overflow-x-auto scrollbar-custom p-4">
          <Button variant='ghost' className="flex-1 cursor-pointer py-2">
            Todos
          </Button>
          <Button variant='ghost' className="flex-1 cursor-pointer py-2">
            Pendientes
          </Button>
          <Button variant='ghost' className="flex-1 cursor-pointer py-2">
            Entregadas
          </Button>
        </div>
      </div>
      {/* CONTENT */}
      <div className="container mx-auto flex flex-col px-4 gap-5 py-10">
        {allOrders?.payload.map((ord: OrderType) => (
          <AdminOrderCard key={ord.id} order={ord} />
        ))}
      </div>
    </AdminLayout>
  )
}

export default AdminOrders