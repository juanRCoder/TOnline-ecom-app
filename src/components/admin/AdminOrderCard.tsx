import { Button } from "@/components/ui/button"
import type { OrderType } from "@/types/orders.type"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "../ui/card"
import { AdminOrderDetails } from "./AdminOrderDetails"
import { handleOrderStatus } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type props = {
  order: OrderType
}

export const AdminOrderCard = ({ order }: props) => {
  const [modalDetails, setModalDetails] = useState<boolean>(false)

  return (
    <Card>
      <CardContent className="flex justify-between">
        <div>
          <p className="text-lg font-semibold pb-2">Orden #{`${order.id.slice(-6).toUpperCase()}`}</p>
          <p>{order.guestUserName}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-right text-lg font-semibold">
            S/ {order.total.toFixed(2)}
          </p>
          <Badge className="text-md">
            {handleOrderStatus(order.status)}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-5">
        <Button onClick={() => setModalDetails(true)} variant='outline' className="flex-1 py-4 cursor-pointer">
          Ver Resumen
        </Button>
        <Button variant='default' className="flex-1 py-4 cursor-pointer">
          Confirmar Entrega
        </Button>
      </CardFooter>
      <AdminOrderDetails open={modalDetails} onOpenChange={setModalDetails} id={order.id} />
    </Card >
  )
}
