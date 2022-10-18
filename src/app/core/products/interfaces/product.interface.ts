export interface IProductResponse {
  cover: null;
  createdAt: Date;
  description: null;
  id: string;
  name: string;
  price: number;
  supplier: Supplier;
  updatedAt: Date;
  variants: Variant[];
}

export interface Supplier {
  contact: string;
  createdAt: Date;
  id: number;
  name: string;
  updatedAt: Date;
}

export interface Variant {
  id: number;
  size: Size;
  stock: Stock;
  type: Type;
}

export interface Size {
  id: number;
  value: string;
}

export interface Stock {
  id: number;
  quantity: number;
}

export interface Type {
  id: number;
  name: string;
}
