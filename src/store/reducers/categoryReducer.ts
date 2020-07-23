import {
  CategoryType,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
} from "../types";

const categoryReducer = (state: CategoryType[] = [], action: any) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category];
    case DELETE_CATEGORY:
      return state.filter(
        (category: CategoryType) => category._id !== action.id
      );
    case FETCH_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoryReducer;
