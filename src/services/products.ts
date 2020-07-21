import { ProductType, CategoryType } from "../store/types";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Acer Swift 3",
    purchasePrice: 750,
    sellPrice: 1000,
    category: "Laptop",
  },
  {
    id: 2,
    name: "Tesla X",
    purchasePrice: 133000,
    sellPrice: 1000,
    category: "Car",
  },
];

export const categories: CategoryType[] = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Car" },
];
