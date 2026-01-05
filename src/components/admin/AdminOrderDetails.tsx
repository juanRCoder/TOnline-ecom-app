import { useEffect } from "react";
import { useOrders } from "@/hooks/useOrders";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { handleOrderStatus, handleTypeOfDelivery, handleTypeOfPayment } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import type { OrderProducts } from "@/types/orders.type";
import { Card, CardContent } from "../ui/card";

type props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string
}

export const AdminOrderDetails = ({ open, onOpenChange, id }: props) => {

  const { data: order } = useOrders.useGetById(id);

  const fields = [
    { key: 'user', label: 'Usuario', value: order?.payload?.guestUserName },
    { key: 'phone', label: 'Teléfono', value: order?.payload?.guestUserPhone },
    { key: 'status', label: 'Estado', value: handleOrderStatus(order?.payload?.status) },
    { key: 'delivery', label: 'Tipo de entrega', value: handleTypeOfDelivery(order?.payload?.typeOfDelivery) },
    { key: 'payment', label: 'Tipo de pago', value: handleTypeOfPayment(order?.payload?.typeOfPayment) },
    { key: 'total', label: 'Precio total', value: `S/ ${order?.payload?.total.toFixed(2)}` },
  ]

  useEffect(() => {
    if (!open) return
    console.log(order)
  }, [open, order])


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4'>
            Orden #{id.slice(-6).toUpperCase()}
          </DialogTitle>
          <div className="flex flex-col gap-4 px-6">
            {fields.map(({ key, label, value }) => (
              <div key={key} className="flex justify-between">
                <p>{label}:</p>
                {key !== 'status' ? (<p>{value}</p>) : (<Badge>{value}</Badge>)}
              </div>
            ))}
          </div>
          <div className="px-6">
            <h3 className="font-semibold text-lg">Productos:</h3>
            <ScrollArea className='flex max-h-64 flex-col overflow-hidden mb-4'>
              <div className="flex flex-col gap-4 mr-8 my-4">
                {order?.payload?.OrderProducts.map((op: OrderProducts, i: number) => (
                  <Card key={i} className="p-3">
                    <CardContent className="p-0 flex items-center gap-4">
                      <img
                        src={op.Products.imageUrl}
                        className="rounded-md"
                        width={80}
                        height={80}
                      />
                      <div>
                        <h3 className="font-semibold">{op.Products.name}</h3>
                        <p className="text-sm mb-1.5">S/ {op.price.toFixed(2)}</p>
                        <p className="text-sm">Cantidad: {op.quantity}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
