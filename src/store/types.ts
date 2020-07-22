export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export type ProductType = {
  id: number;
  name: string;
  purchasePrice: number;
  sellPrice: number;
  category: string;
};

export type CategoryType = {
  id: number;
  name: string;
};
