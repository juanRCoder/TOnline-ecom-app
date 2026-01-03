import { useEffect } from "react";
import { useOrders } from "@/hooks/useOrders";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { handleOrderStatus, handleTypeOfPayment } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import type { OrderProducts } from "@/types/orders.type";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string
}

export const AdminOrderDetails = ({ open, onOpenChange, id }: props) => {

  const { data: order } = useOrders.useGetById(id);

  useEffect(() => {
    if (!open) return
    console.log(order)
  }, [open, order])


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle />
      <DialogContent>
        <h2>Orden #{id.slice(-6).toUpperCase()}</h2>
        <h3>Usuario: {order?.payload?.guestUserName}</h3>
        <p>Telefono: {order?.payload?.guestUserPhone}</p>
        <p>Estado: <Badge>{handleOrderStatus(order?.payload?.status)}</Badge></p>
        <p>Tipo de entrega: {order?.payload?.typeOfDelivery}</p>
        <p>Tipo de pago: {handleTypeOfPayment(order?.payload?.typeOfPayment)}</p>
        <p>Precio total: {order?.payload?.total}</p>
        <h3 className="font-semibold">Productos:</h3>
        <ScrollArea className='flex max-h-64 flex-col overflow-hidden'>
          {order?.payload?.OrderProducts.map((op: OrderProducts, i: number) => (
            <div key={i}>
              <img
                src={op.Products.imageUrl}
                width={80}
                height={80}
              />
              <h3>{op.Products.name}</h3>
              <p>Cantidad: {op.quantity}</p>
              <p>Precio: {op.price}</p>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
