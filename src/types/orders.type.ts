export type VoucherType = {
  id: string;
  createdAt: string;
  products: OrderProducts[];
  subtotal: number;
  deliveryCost: number;
  total: number;
  guestUserName: string
  typeOfDelivery: "local" | "delivery";
};

type OrderProducts = {
  name: string;
  quantity: number;
  subtotal: number;
};
