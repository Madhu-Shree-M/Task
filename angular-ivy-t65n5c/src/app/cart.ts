import { Product } from "./product";

export interface Cart{
  id:number;
  products:Set<Product>;
  total:number;
  discountedTotal:number;
  totalProducts:number;
  totalQuantity:number;
  userId:number;
}