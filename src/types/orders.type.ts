export type VoucherType = {
  id: string;
  createdAt: string;
  products: Products[];
  subtotal: number;
  deliveryCost: number;
  total: number;
  guestUserName: string;
  typeOfDelivery: "local" | "delivery";
};

type Products = {
  name: string;
  quantity: number;
  subtotal: number;
};

export type OrderType = {
  id: string;
  guestUserName: string;
  guestUserPhone?: string;
  typeOfDelivery?: string;
  typeOfPayment?: string;
  status: string;
  total: number;
  OrderProducts?: {
    quantity: number;
    price: number;
    Products: {
      name: string;
      imageUrl: string
    }
  };
};
