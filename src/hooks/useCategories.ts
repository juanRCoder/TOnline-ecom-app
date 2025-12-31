import { getAll } from '@/services/categories.service'
import { useQuery } from '@tanstack/react-query'

const useGetAll = () => {
  return useQuery({
    queryKey: ['allCategories'],
    queryFn: () => getAll(),
  }) 
}

export const useCategories = {
  useGetAll
}