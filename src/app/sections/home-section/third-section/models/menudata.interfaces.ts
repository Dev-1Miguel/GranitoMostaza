import { Product } from "./product.interfaces";

export interface MenuData {
  postres: Product[];
  desayunos: Product[];
  bebidas?: Product[];
}