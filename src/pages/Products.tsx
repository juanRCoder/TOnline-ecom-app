import { useMemo, useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ShopLayout from '@/layouts/ShopLayout';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { useDebounce } from '@/hooks/useDebounce';
import { useCartStore } from '@/stores/cart.store';
import type { ProductType } from '@/types/products.type';
import type { CategoryType } from '@/types/categories.type';
import { FormInput } from '@/components/FormInput';
import { capitalize } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


const Products = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [onCategory, setOnCategory] = useState<string>('Todos')
  const [categoryId, setCategoryId] = useState<string>('')

  const navigate = useNavigate()
  const { items } = useCartStore()
  const debouncedSearch = useDebounce(searchTerm, 400);
  const { data: allProducts, isLoading: loadingAll, error: errorAll } = useProducts.useGetAll(debouncedSearch)
  const { data: productsByCategory, isLoading: loadingCategory, error: errorCategory } = useProducts.useByCategoryId(categoryId)
  const { data: allCategories, isLoading: loadingCategories, error: errorCategories } = useCategories.useGetAll()

  const categories = useMemo(() => {
    if (!allCategories) return
    return [{ id: '', name: 'Todos' }, ...allCategories.payload]
  }, [allCategories])

  const handleProductsByCategory = (ctg: CategoryType) => {
    setOnCategory(ctg.name)
    setCategoryId(ctg.id)
    setSearchTerm('')
  }

  const handleSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value !== '') {
      setOnCategory('Todos');
      setCategoryId('');
    }
  }

  const filteredProducts = onCategory === 'Todos' ? allProducts?.payload : productsByCategory?.payload
  const loading = loadingAll || loadingCategory;
  const error = errorAll || errorCategory;

  return (
    <ShopLayout>
      <div className='w-full sticky z-50 top-0 bg-background text-foreground flex justify-between p-4 border-b'>
        <h2 className="text-2xl text-center font-semibold">FutamiShop</h2>
        <div
          className='flex gap-6 items-center justift-center relative cursor-pointer pr-4'
        >
          <Button
            onClick={() => navigate('/admin')}
            variant='ghost'
            className='cursor-pointer'
          >
            Administracion
          </Button>
          <div onClick={() => navigate('/cart')}>
            {items.length > 0 && (
              <Badge className='absolute right-0.5 bottom-4 text-xs'>
                {items.length}
              </Badge>
            )}
            <ShoppingCart className='h-8 w-8' />
          </div>
        </div>
      </div>
      <section className='container mx-auto py-4'>
        <div className='flex flex-col gap-4 pb-4'>
          <div className='flex gap-2 bg-input rounded-xl p-3'>
            <Search />
            <FormInput
              id='search'
              placeholder='Buscar productos'
              onChange={(e) => handleSearchProducts(e)}
              className="border-0 ring-0 focus:ring-0 focus-visible:ring-0"
            />
          </div>
          <div className="scrollbar-custom flex gap-2 overflow-x-auto">
            {loadingCategories && (
              <span className='text-sm'>Cargando categorias...</span>
            )}
            {errorCategories && (
              <span className="text-destructive">{errorCategories.message}</span>
            )}
            {categories?.map((ctg: CategoryType) => (
              <Button
                key={ctg.id}
                variant='outline'
                className='cursor-pointer rounded-md select-none'
                onClick={() => handleProductsByCategory(ctg)}
              >
                {capitalize(ctg.name)}
              </Button>
            ))}
          </div>
        </div>
        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="block border-5 border-l-transparent w-12 h-12 rounded-full animate-spin" />
            <span>Cargando productos...</span>
          </div>
        )}
        {error && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <span className="text-destructive">{error.message}</span>
          </div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((prd: ProductType) => (
                <ProductCard key={prd.id} product={prd} />
              ))
            ) : (
              <div className="text-foreground col-span-full text-center py-10 select-none">
                No se encontraron productos con "{searchTerm}"
              </div>
            )}
          </div>
        )}
      </section>
    </ShopLayout>
  )
}

export default Products;
