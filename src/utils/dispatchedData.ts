import { ProductType, CategoryType } from "../store/types";
import { Dispatch, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { deleteProduct, changeProduct, deleteCategory } from "../store/actions";
import {
  deleteCategoryAPI,
  deleteProductAPI,
  changeProductAPI,
} from "../services/api.service";
import { Result } from "antd";

export function getProductTable(
  products: ProductType[],
  filter: string,
  dispatch: Dispatch
) {
  return products
    .filter(
      (product: ProductType) => filter === "" || product.category === filter
    )
    .map((product: ProductType) => ({
      ...product,
      onDelete: () => {
        deleteProductAPI(product._id).then(() =>
          dispatch(deleteProduct(product._id))
        );
      },
      onChange: (newProduct: ProductType) => {
        changeProductAPI(newProduct).then((result: ProductType) => {
          dispatch(changeProduct(result));
        });
      },
    }));
}

export function getCategoryList(
  categories: CategoryType[],
  dispatch: Dispatch
) {
  return categories.map((category: CategoryType) => ({
    ...category,
    onDelete: () => {
      deleteCategoryAPI(category._id).then(() =>
        dispatch(deleteCategory(category._id))
      );
    },
  }));
}
