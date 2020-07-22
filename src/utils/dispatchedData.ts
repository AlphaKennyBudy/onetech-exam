import { ProductType, CategoryType } from "../store/types";
import { Dispatch } from "redux";
import { deleteProduct, changeProduct, deleteCategory } from "../store/actions";

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
        dispatch(deleteProduct(product.id));
      },
      onChange: (newProduct: ProductType) => {
        dispatch(changeProduct({ ...newProduct, id: product.id })); //FIXME: Fix id assigning
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
      dispatch(deleteCategory(category.id));
    },
  }));
}
