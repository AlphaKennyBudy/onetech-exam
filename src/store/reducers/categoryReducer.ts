import {
  CategoryType,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
} from "../types";
import { categories } from "../../services/products";

const categoryReducer = (state: CategoryType[] = categories, action: any) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category];
    case DELETE_CATEGORY:
      return state.filter(
        (category: CategoryType) => category.id !== action.id
      );
    case FETCH_CATEGORIES:
        
    default:
      return state;
  }
};

export default categoryReducer;
