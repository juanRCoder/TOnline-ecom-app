import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { AdminLayout } from "@/layouts/AdminLayout"
import { AdminOrderCard } from "@/components/admin/AdminOrderCard"
import { Button } from "@/components/ui/button"
import { useOrders } from "@/hooks/useOrders"
import type { OrderType } from "@/types/orders.type"

const AdminOrders = () => {
  const navigate = useNavigate()

  const { data: allOrders } = useOrders.useGetAll()

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className='bg-background text-foreground flex p-4 border-b'>
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Ordenes</h2>
      </div>
      <div className="scrollbar-custom text-primary flex justify-evenly overflow-x-auto px-3 py-5">
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
      {/* CONTENT */}
      <div className="flex flex-col px-3 gap-5 py-10">
        {allOrders?.payload.map((ord: OrderType) => (
          <AdminOrderCard key={ord.id} order={ord} />
        ))}
      </div>
    </AdminLayout>
  )
}

export default AdminOrders