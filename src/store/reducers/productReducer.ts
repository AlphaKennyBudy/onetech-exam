import {
  ProductType,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  CHANGE_PRODUCT,
} from "../types";
import { products } from "../../services/products";

const productReducer = (state: ProductType[] = products, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case CHANGE_PRODUCT:
      return state.map((product: ProductType) =>
        product.id === action.product.id ? action.product : product
      );
    case DELETE_PRODUCT:
      return state.filter((product: ProductType) => product.id !== action.id);
    case FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productReducer;
