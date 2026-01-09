import { LayoutGrid, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/voucher";

  const footerItems = [
    {
      to: '/',
      label: 'Productos',
      Icon: LayoutGrid,
    },
    {
      to: '/cart',
      label: 'Carrito',
      Icon: ShoppingCart,
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col bg-sidebar text-primary">{children}</div>
      {!hideFooter && (
        <footer className="w-full sticky bottom-0 py-5 flex justify-evenly border-t bg-background text-primary">
          {footerItems.map(({ to, label, Icon }) => (
            <Link key={to} to={to} className="flex flex-col items-center gap-1 cursor-pointer group">
              <Icon className="group-hover:text-muted-foreground" />
              <p className="group-hover:text-muted-foreground">
                {label}
              </p>
            </Link>
          ))}
        </footer>
      )}
    </section>
  );
}
