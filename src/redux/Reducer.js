const initialState = {
  cartData: [],
  inputData: [],
  data: [],
  isTrue: "",
};
export const ReducerFun = (state = initialState, action) => {
  switch (action.type) {
    case "Add_to_cart":
      if (state.cartData.length == 0) {
        action.payload["quan"] = 1;
        return { ...state, cartData: [...state.cartData, action.payload] };
      }
      let isTrue = false;
      for (let i = 0; i < state.cartData.length; i++) {
        if (state.cartData[i].id == action.payload.id) {
          isTrue = true;
          state.cartData[i]["quan"]++;
          break;
        } else {
          if (action.payload["quan"]) {
            continue;
          } else {
            action.payload["quan"] = 1;
          }
        }
      }
      if (isTrue == true) {
        return { ...state, cartData: [...state.cartData] };
      } else {
        return { ...state, cartData: [...state.cartData, action.payload] };
      }

    case "Remove_to_cart":
      let arr = state.cartData.filter((ele) => {
        if (ele.id == action.payload) {
          ele.quan--;
          if (ele.quan != 0) {
            return ele;
          }
        } else {
          return ele;
        }
      });
      return { ...state, cartData: [...arr] };
    case "Search_Input":
      return { ...state, inputData: [...state.inputData, action.payload] };

    case "Fetch_Data":
      return { ...state, data: action.payload };

    case "IsTrue_Data":
      return { ...state, isTrue: action.payload };
    default:
      return state;
  }
};
