import { SET_FILTER } from "../actions/actionTypes";

const filterReducer = (state: string = "", action: any) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
