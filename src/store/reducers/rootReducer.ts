import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  productStore: productReducer,
  categoryStore: categoryReducer,
});

export default rootReducer;
