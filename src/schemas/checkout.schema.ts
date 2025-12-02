import type { CartItemList } from "@/types/cart.type";
import { z } from "zod";

export const schemaCheckoutForm = z
  .object({
    guestUserName: z.string().min(1, "Nombre de cliente obligatorio!"),
    guestUserPhone: z.string().regex(/^9\d{8}$/, "Número inválido, debe tener 9 dígitos y empezar en 9"),
    typeOfDelivery: z.string().min(1, "Tipo de entrega obligatorio!"),
    guestUserAddress: z.string().optional(),
    typeOfPayment: z.string().min(1, "Tipo de pago obligatorio!"),
    imageVoucher: z.any().optional().nullable(),
    notes: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.typeOfDelivery === "delivery") {
        return Boolean(data.guestUserAddress?.trim().length);
      }
      return true;
    },
    {
      path: ["guestUserAddress"],
      message: "Dirección domiciliaria obligatoria!",
    }
  ) .refine(
    (data) => {
      if (data.typeOfPayment === "bank") {
        return Boolean(data.imageVoucher);
      }
      return true;
    },
    {
      path: ["imageVoucher"],
      message: "El voucher es obligatorio para pago bancario!",
    }
  );

export type TypeCheckoutForm = z.infer<typeof schemaCheckoutForm>;
export type TypeCheckout = TypeCheckoutForm & {
  products: Omit<CartItemList, "name" | "imageUrl">[];
};
