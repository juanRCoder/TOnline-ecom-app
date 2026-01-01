import { getAll, getById, update } from "@/services/categories.service";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetAll = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getAll(),
  });
};

const useGetById = (id: string) => {
  return useQuery({
    queryKey: ["getCategoryById", id],
    queryFn: () => getById(id),
    enabled: !!id,
  });
};

type UseMutationProps = {
  onSuccess?: (data: {
    success: boolean;
    payload: { ok: boolean };
  }) => void;
  onError?: (message: string) => void;
};

const useUpdate = ({ onSuccess, onError }: UseMutationProps) => {
  return useMutation({
    mutationFn: update,
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
    },
    onError(error) {
      if (onError) onError(String(error));
    },
  });
};

export const useCategories = {
  useGetAll,
  useGetById,
  useUpdate
};
