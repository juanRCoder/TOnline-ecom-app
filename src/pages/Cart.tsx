import { useNavigate } from "react-router-dom";
import ShopLayout from "@/layouts/ShopLayout";
import { CartItem } from "@/components/CartItem";
import { useCartStore } from "@/stores/cart.store";
import { Button } from "@/components/ui/button";
import { Header } from "@/layouts/Header";


const Cart = () => {
  const navigate = useNavigate()
  const { items } = useCartStore()

  const totalProducts = items.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <ShopLayout>
      <Header title="Carrito" path="/" />
      <section className="flex-1 container mx-auto p-4">
        <div className='flex flex-col gap-6 flex-1'>
          {items && items.length > 0 ? (
            items.map((item, i) => (
              <CartItem key={i} item={item} />
            ))
          ) : (
            <div className="flex flex-1 items-center justify-center text-center select-none">
              No hay productos en el carrito
            </div>
          )}
        </div>
      </section>
      <div className="sticky bottom-25 left-0 right-0 z-50 bg-sidebar border-t-2">
        <div className="container mx-auto flex justify-between p-4 font-semibold">
          <p>Total:</p>
          <p>S/ {totalProducts.toFixed(2)}</p>
        </div>
        <div className="container mx-auto p-4">
          <Button
            onClick={() => navigate('/checkout')}
            disabled={items.length === 0}
            className={`w-full py-5
              ${items.length > 0 ? 'cursor-pointer' : 'bg-primary/50 select-none'}
            `}
          >
            Pagar
          </Button>
        </div>
      </div>
    </ShopLayout>
  )
}

export default Cart;