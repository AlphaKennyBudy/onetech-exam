import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  ProductType,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CategoryType,
  FETCH_PRODUCTS,
  CHANGE_PRODUCT,
  SET_FILTER,
} from "../types";

export const addCategory = (category: CategoryType) => ({
  type: ADD_CATEGORY,
  category,
});

export const deleteCategory = (id: number) => ({
  type: DELETE_CATEGORY,
  id,
});

export const fetchCategories = (categories: CategoryType[]) => ({
  type: FETCH_CATEGORIES,
  categories,
});

export const addProduct = (product: ProductType) => ({
  type: ADD_PRODUCT,
  product,
});

export const changeProduct = (product: ProductType) => ({
  type: CHANGE_PRODUCT,
  product,
});

export const deleteProduct = (id: number) => ({
  type: DELETE_PRODUCT,
  id,
});

export const fetchProducts = (products: ProductType[]) => ({
  type: FETCH_PRODUCTS,
  products,
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  filter,
});
