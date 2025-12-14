import { AdminOrderCard } from "@/components/admin/AdminOrderCard"
import { AdminLayout } from "@/layouts/AdminLayout"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const AdminOrders = () => {
  const navigate = useNavigate()

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className='bg-background text-foreground flex p-4 border-b'>
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} strokeWidth={3} className='cursor-pointer' />
        <h2 className="text-2xl text-center flex-1 font-semibold">Ordenes</h2>
      </div>
      <div className="scrollbar-custom text-primary flex justify-evenly overflow-x-auto px-3 py-5">
        <p className="flex-1 hover:bg-primary/60 hover:text-secondary text-center px-4 py-2 rounded-md cursor-pointer">Todos</p>
        <p className="flex-1 hover:bg-primary/60 hover:text-secondary text-center px-4 py-2 rounded-md cursor-pointer">Pendientes</p>
        <p className="flex-1 hover:bg-primary/60 hover:text-secondary text-center px-4 py-2 rounded-md cursor-pointer">Completadas</p>
        <p className="flex-1 hover:bg-primary/60 hover:text-secondary text-center px-4 py-2 rounded-md cursor-pointer">Rechazadas</p>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col px-3 gap-5 py-10">
        <AdminOrderCard />
        <AdminOrderCard />
        <AdminOrderCard />
      </div>
    </AdminLayout>
  )
}

export default AdminOrders