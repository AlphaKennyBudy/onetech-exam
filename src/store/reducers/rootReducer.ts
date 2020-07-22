import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  productState: productReducer,
  categoryState: categoryReducer,
  filterState: filterReducer,
});

export default rootReducer;
