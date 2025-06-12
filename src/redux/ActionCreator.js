import { ACTION_TYPE } from "./ActionType";

export const addtocart = (product) => {
  return { type: ACTION_TYPE.ADD_TO_CART, payload: product };
};
export const removetocart = (id) => {
  return { type: ACTION_TYPE.REMOVE_TO_CART, payload: id };
};
export const searchinput = (text) => {
  return { type: ACTION_TYPE.Search_Input, payload: text };
};
