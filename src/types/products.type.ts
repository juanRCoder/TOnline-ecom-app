export type ProductType = {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  stock?: number;
  Categories?: { name: string };
};
