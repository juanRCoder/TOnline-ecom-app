import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const handleOrderStatus = (status: string) => {
  if (status === "pending") return "pendiente";
  if (status === "delivered") return "entregado";
}

export const handleTypeOfPayment = (payment: string) => {
  if (payment === "cash") return "efectivo"
  if (payment === "bank") return "bancario"
}

export const handleTypeOfDelivery = (delivery: string) => {
  if (delivery === "delivery") return "A domicilio"
  if (delivery === "local") return "En tienda"
}