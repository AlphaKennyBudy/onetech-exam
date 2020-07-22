import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  productState: productReducer,
  categoryState: categoryReducer,
});

export default rootReducer;
