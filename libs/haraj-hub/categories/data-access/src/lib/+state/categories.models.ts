/**
 * Interface for the 'Categories' data
 */
export interface CategoriesEntity {
  id: number;
  name: string;
  description: string;
  image: string;
  parentCategoryId: number | null;
  subcategories: CategoryVM[];
}

export interface CategoryVM {
  id: number;
  name: string;
  description: string;
  image: string;
  parentCategoryId: number | null;
  subcategories: CategoryVM[];
}
