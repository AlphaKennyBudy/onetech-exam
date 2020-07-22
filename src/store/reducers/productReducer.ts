import {
  ProductType,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
} from "../types";
import { products } from "../../services/products";

const productReducer = (state: ProductType[] = products, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return state.filter((product: ProductType) => product.id !== action.id);
    case FETCH_PRODUCTS:

    default:
      return state;
  }
};

export default productReducer;
