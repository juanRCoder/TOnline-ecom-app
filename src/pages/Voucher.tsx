import { Download, CreditCard, User2, Store, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShopLayout from "@/layouts/ShopLayout";
import { useVoucherStore } from "@/stores/voucher.store";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button"


const Voucher = () => {
  const navigate = useNavigate()
  const { voucher } = useVoucherStore()

  const PaymentIcon = voucher?.typeOfDelivery === "delivery" ? CreditCard : Coins;

  return (
    <ShopLayout>
      <div className="bg-sidebar text-foreground flex-1 flex flex-col">
        <div className='bg-background flex items-center justify-between p-4 shadow-sm'>
          <h2 className="text-2xl text-center flex-1 font-semibold">Voucher</h2>
          <Download className='absolute right-4 cursor-pointer' />
        </div>
        <div className="flex-1 flex flex-col gap-5 items-center justify-center my-10">
          <Card className="max-w-md w-full">
            <CardHeader className="flex flex-col items-center text-xs">
              <h3 className="text-xl font-semibold">FutamiShop</h3>
              <p>Av. Siempre Viva 742</p>
              <p className="mt-5">
                {voucher?.createdAt || '15 de mayo de 2024, 15:30'}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1 border-y border-dashed border-border py-5">
                {voucher?.products.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <p>
                      {item.name || 'Product'} x{item.quantity || 2}
                    </p>
                    <p>S/{item.subtotal.toFixed(2) || '3.00'}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1 py-5">
                <div className="text-center flex justify-between">
                  <p className="">Subtotal</p>
                  <p>S/{voucher?.subtotal.toFixed(2) || '3.00'}</p>
                </div>
                <div className="text-center flex justify-between">
                  <p className="">Costo de envio</p>
                  <p>S/{voucher?.deliveryCost.toFixed(2) || '3.00'}</p>
                </div>
              </div>

              <div className="flex justify-between gap-1 border-y border-dashed border-border py-5">
                <p>Total</p>
                <p>S/{voucher?.total.toFixed(2) || '3.00'}</p>
              </div>

              <div className="flex flex-col gap-5 pt-5">
                <div className="flex items-center gap-2">
                  <User2 size={32} className="text-primary" />
                  <div className="flex flex-col">
                    <p>{voucher?.guestUserName || 'Juan Ramirez'}</p>
                    <p className=" text-sm">Cliente</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <PaymentIcon size={32} className="text-primary" />
                  <div className="flex flex-col">
                    <p>{voucher?.typeOfDelivery === "delivery" ? "Transferencia Bancaria" : "Efectivo"}</p>
                    <p className="text-sm">Metodo de pago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-center w-full">
                <p>Pedido #{voucher?.id.slice(-6).toUpperCase() || '123ASD'}</p>
                <p className="text-sm text-primary">!Gracias por tu compra!</p>
              </div>
            </CardFooter>
          </Card>
          <Button
            onClick={() => navigate('/')}
            className="bg-primary p-5 max-w-md w-md cursor-pointer"
          >
            <Store /> Volver a la tienda
          </Button>
        </div>
      </div>
    </ShopLayout>
  )
}

export default Voucher;