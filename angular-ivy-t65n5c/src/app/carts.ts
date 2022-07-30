import { Cart } from "./cart";

export interface Carts{
  carts:Set<Cart>;
  limit:number;
  skip:number;
  total:number;
}