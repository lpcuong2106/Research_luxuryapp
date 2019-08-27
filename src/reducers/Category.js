import * as Types from "../constant";
const initialState = [];
export default (state = initialState, action) => {
  const { listCategory } = action;
  switch (action.type) {
    /*aciton get category */
    case Types.GET_CATEGORY:
      state = listCategory;
      return [...state];
    
    default:
      return state;
  }
};
