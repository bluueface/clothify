export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingInterface;
}

export interface CategoryInterface {
  id: number;
  name: string;
}

export interface SubCategoryInterface {
  id: number;
  name: string;
  category: CategoryInterface;
}

export interface RatingInterface {
  rate: number;
  count: number;
}

export interface CartItemInterface {
  product: ProductInterface | undefined;
  quantity: number;
}
