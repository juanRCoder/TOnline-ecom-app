import { createOrder, getAll } from "@/services/orders.service";
import type { VoucherType } from "@/types/orders.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetAll = () => {
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: getAll,
  });
};

type UseCreateOrderProps = {
  onSuccess?: (data: { success: boolean; payload: VoucherType }) => void;
  onError?: (message: string) => void;
};

export const useCreateOrder = ({ onSuccess, onError }: UseCreateOrderProps) => {
  return useMutation({
    mutationFn: createOrder,
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
    },
    onError(error) {
      if (onError)
        onError(error instanceof Error ? error.message : String(error));
    },
  });
};

export const useOrders = {
  useGetAll,
  useCreateOrder,
};
