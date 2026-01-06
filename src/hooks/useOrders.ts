import { confirmDelivery, create, getAll, getById } from "@/services/orders.service";
import type { VoucherType } from "@/types/orders.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetAll = () => {
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: getAll,
  });
};

const useGetById = (id: string) => {
  return useQuery({
    queryKey: ["getOrderById", id],
    queryFn: () => getById(id),
    enabled: !!id,
  });
};

type UseMutationProps<TPayload> = {
  onSuccess?: (data: { success: boolean; payload: TPayload }) => void;
  onError?: (message: string) => void;
};

export const useCreate = ({
  onSuccess,
  onError,
}: UseMutationProps<VoucherType>) => {
  return useMutation({
    mutationFn: create,
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
    },
    onError(error) {
      if (onError)
        onError(error instanceof Error ? error.message : String(error));
    },
  });
};

export const useConfirmDelivery = ({
  onSuccess,
  onError,
}: UseMutationProps<{ ok: boolean }>) => {
  return useMutation({
    mutationFn: confirmDelivery,
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
  useGetById,
  useCreate,
  useConfirmDelivery,
};
