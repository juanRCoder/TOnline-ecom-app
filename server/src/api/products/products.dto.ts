export interface createProductDto {
  name: string;
  price: number;
  stock: number;
  status: string;
  imageUrl?: string;
  imagePublicId?: string;
  categoryId: string;
}

export interface updateProductDto extends Partial<createProductDto> {
  removeImage?: string; // boolean flag in string
}
