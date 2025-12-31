import { getAll, getById } from "@/services/categories.service";
import { useQuery } from "@tanstack/react-query";

const useGetAll = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: () => getAll(),
  });
};

const useGetById = (id: string) => {
  return useQuery({
    queryKey: ["getById", id],
    queryFn: () => getById(id),
    enabled: !!id,
  });
};

export const useCategories = {
  useGetAll,
  useGetById
};
