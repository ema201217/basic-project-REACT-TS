export interface Product {
  name: string,
  price:number,
  discount?: number
}

export interface ProductInitialState {
  products: Product[];
  loading: boolean;
}