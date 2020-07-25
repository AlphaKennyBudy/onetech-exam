import { ProductType, CategoryType } from "../store/types";
import { deleteProduct, changeProduct, deleteCategory } from "../store/actions";
import {
  deleteCategoryAPI,
  deleteProductAPI,
  changeProductAPI,
} from "../services/api.service";
import { toast } from "react-toastify";
import { Dispatch } from "redux";

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
        deleteProductAPI(product._id)
          .then(() => dispatch(deleteProduct(product._id)))
          .then(() => toast.success("Продукт удален!"))
          .catch((error) => toast.error(error.message));
      },
      onChange: (newProduct: ProductType) => {
        changeProductAPI(newProduct)
          .then((result: ProductType) => {
            dispatch(changeProduct(result));
          })
          .then(() => toast.success("Успешно изменено!"))
          .catch((error) => toast.error(error.message));
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
      deleteCategoryAPI(category._id)
        .then((response) => {
          dispatch(deleteCategory(category._id));
          return response;
        })
        .then((response) => toast.success(response.message))
        .catch((error) => toast.error(error.message));
    },
  }));
}
