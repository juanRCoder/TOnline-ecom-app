import type { TypeCheckout } from "@/schemas/checkout.schema";

const API = import.meta.env.VITE_API_DEV;

export const createOrder = async (orderData: TypeCheckout) => {
  try {
    const response = await fetch(`${API}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData)
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    console.error("[createOrder]", error);
    throw error;
  }
};