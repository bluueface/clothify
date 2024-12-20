export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  subCategory: SubCategoryInterface;
  image: string;
  ratings: RatingInterface[];
  ratingCount?: number;
  ratingRate?: number;
}

export interface CategoryInterface {
  id: number;
  name: string;
  subCategories: SubCategoryInterface[];
}

export interface SubCategoryInterface {
  id: number;
  name: string;
  category: CategoryInterface;
}

export interface RatingInterface {
  id?: number;
  rate: number;
  comment: string;
  product: ProductInterface;
}

export interface CartItemInterface {
  product: ProductInterface | undefined;
  quantity: number;
}

export interface OrderInterface {
  id?: number;
  date?: Date;
  products?: ProductInterface[];
  buyer?: UserInterface;
  address?: Address;
  orderState?: string;
}

export interface UserInterface {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  address?: Address;
  orders?: OrderInterface[];
  userType?: string;
  active?: boolean;
}

export interface Address {
  name?: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
