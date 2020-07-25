import {
  ProductType,
} from "../types";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  CHANGE_PRODUCT
} from "../actions/actionTypes";

const productReducer = (state: ProductType[] = [], action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case CHANGE_PRODUCT:
      return state.map((product: ProductType) =>
        product._id === action.product._id ? action.product : product
      );
    case DELETE_PRODUCT:
      return state.filter((product: ProductType) => product._id !== action.id);
    case FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productReducer;
