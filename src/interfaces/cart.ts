import { Product } from "@/interfaces/product";

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}

export type CartItem = Product & {
  id: string;
  title: string;
  price: number;
  quantity: number;
};
