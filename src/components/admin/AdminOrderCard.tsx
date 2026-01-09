import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import type { OrderType } from "@/types/orders.type"
import { AdminOrderDetails } from "./AdminOrderDetails"
import { useOrders } from "@/hooks/useOrders"
import { handleOrderStatus } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type props = {
  order: OrderType
}

export const AdminOrderCard = ({ order }: props) => {
  const queryClient = useQueryClient();
  const [modalDetails, setModalDetails] = useState<boolean>(false)

  const { mutate: confirmOrder, isPending } = useOrders.useConfirmDelivery({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allOrders"] });
    },
    onError: (message) => {
      console.error("Error updating product:", message);
    }
  });

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
      <CardFooter className="gap-5 flex flex-wrap">
        <Button onClick={() => setModalDetails(true)} variant='outline' className="flex-1 py-4 cursor-pointer">
          Ver Resumen
        </Button>
        <Button
          className="flex-1 py-4 cursor-pointer"
          onClick={() => confirmOrder(order.id)}

          disabled={isPending || order.status === 'delivered'}
        >
          {isPending ? "Confirmando..." : "Confirmar Entrega"}
        </Button>
      </CardFooter>
      <AdminOrderDetails open={modalDetails} onOpenChange={setModalDetails} id={order.id} />
    </Card >
  )
}
