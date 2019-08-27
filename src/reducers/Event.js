import * as types from "../constant";
const initialState = [];

export default (state = initialState, action) => {
  const { events } = action;
  switch (action.type) {
    /*action fetch data event*/
    case types.FETCH_EVENT:
      state = events;

      return [...state];

    default:
      return state;
  }
};
 