import * as Types from "../constant";
const initialState = {};

export default (state = initialState, action) => {
  const { contacts } = action;
  switch (action.type) {
    case Types.fetchDataContact:
      state = contacts;
      return { ...state };

    default:
      return state;
  }
};
