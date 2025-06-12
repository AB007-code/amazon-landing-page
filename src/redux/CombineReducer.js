import { combineReducers } from "redux";
import { ReducerFun } from "./Reducer";
export const reducer = combineReducers({
  Product_data: ReducerFun,
});
