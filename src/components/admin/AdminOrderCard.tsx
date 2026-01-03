import { Button } from "@/components/ui/button"
import type { OrderType } from "@/types/orders.type"

type props = {
  order: OrderType
}

export const AdminOrderCard = ({ order }: props) => {
  const handleOrderStatus = (status: string) => {
    if (status === 'pending') return 'pendiente'
    if (status === 'delivered') return 'entregado'
  }

  return (
    <div className='bg-card text-primary rounded-md shadow flex flex-col items-center justify-between px-5 py-3 gap-2 outline-1 outline-border'>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-lg font-semibold pb-2">Orden #{`${order.id.slice(-6)}`}</p>
          <p>{order.guestUserName}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-right text-lg font-semibold">
            S/ {order.OrderProducts[0]?.price.toFixed(2)}
          </p>
          <span className="bg-muted text-primary outline-chart-4 py-2 px-4 rounded-2xl">
            {handleOrderStatus(order.status)}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-5 mt-4">
        <Button variant='outline' className="flex-1 py-4 cursor-pointer">
          Ver Resumen
        </Button>
        <Button variant='default' className="flex-1 py-4 cursor-pointer">
          Confirmar Entrega
        </Button>
      </div>

    </div >
  )
}
