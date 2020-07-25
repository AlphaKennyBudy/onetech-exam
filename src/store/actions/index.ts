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
import {
  addCategoryAPI,
  deleteCategoryAPI,
  fetchCategoriesAPI,
  fetchProductsAPI,
  addProductAPI,
  deleteProductAPI,
} from "../../services/api.service";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const addCategory = (category: CategoryType) => (dispatch: Dispatch) => {
  addCategoryAPI(category)
    .then((category) => {
      dispatch({
        type: ADD_CATEGORY,
        category: category,
      });
    })
    .then(() => toast.success("Успешно добавлено!"))
    .catch((error) => toast.error(error.message));
};

export const deleteCategory = (id: number) => ({
  type: DELETE_CATEGORY,
  id,
});

export const fetchCategories = () => (dispatch: Dispatch) => {
  fetchCategoriesAPI()
    .then((categories) => {
      dispatch({
        type: FETCH_CATEGORIES,
        categories,
      });
    })
    .catch((error) => toast.error(error.message));
};

export const addProduct = (product: ProductType) => (dispatch: Dispatch) => {
  addProductAPI(product)
    .then((product) => dispatch({ type: ADD_PRODUCT, product }))
    .then(() => toast.success("Успешно добавлено!"))
    .catch((error) => toast.error(error.message));
};

export const changeProduct = (product: ProductType) => ({
  type: CHANGE_PRODUCT,
  product,
});

export const deleteProduct = (id: number) => ({
  type: DELETE_PRODUCT,
  id,
});

export const fetchProducts = () => (dispatch: Dispatch) => {
  fetchProductsAPI()
    .then((products) => dispatch({ type: FETCH_PRODUCTS, products }))
    .catch((error) => toast.error(error.message));
};

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  filter,
});
