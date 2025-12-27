import {
  create,
  getAll,
  getByCategoryId,
  getById,
  remove,
  update,
} from "@/services/product.service";
import { useMutation, useQuery } from "@tanstack/react-query";

const useGetAll = (searchTerm?: string, isAdmin: boolean = false) => {
  return useQuery({
    queryKey: ["allProducts", searchTerm, isAdmin],
    queryFn: () => getAll(searchTerm, isAdmin),

    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: searchTerm !== undefined,
  });
};

const useByCategoryId = (id: string) => {
  return useQuery({
    queryKey: ["getByCategoryId", id],
    queryFn: () => getByCategoryId(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

const useGetById = (id: string) => {
  return useQuery({
    queryKey: ["getById", id],
    queryFn: () => getById(id),
    enabled: !!id,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

type UseMutationProps = {
  onSuccess?: (data: {
    success: boolean;
    payload: { message: string };
  }) => void;
  onError?: (message: string) => void;
};

const useCreate = ({ onSuccess, onError }: UseMutationProps) => {
  return useMutation({
    mutationFn: create,
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
    },
    onError(error) {
      if (onError) onError(String(error));
    },
  });
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

const useRemove = ({ onSuccess, onError }: UseMutationProps) => {
  return useMutation({
    mutationFn: remove,
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
    },
    onError(error) {
      if (onError) onError(String(error));
    },
  });
};

export const useProducts = {
  useGetAll,
  useByCategoryId,
  useGetById,
  useCreate,
  useUpdate,
  useRemove
};
