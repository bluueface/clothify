export interface Product {
  id: number;
  title: string;
  // price: number;
  // description: string;
  // category: string;
  // image: string;
  // rating: Rating;
}

export interface Category {
  id: number;
  name: string;
}

export interface SubCategory {
  id: number;
  name: string;
  category: Category;
}

export interface Rating {
  rate: number;
  count: number;
}
