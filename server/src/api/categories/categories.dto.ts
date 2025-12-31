export interface createCategoryDto {
  name: string
}

export type UpdateCategoryDto = Partial<createCategoryDto>
