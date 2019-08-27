import * as types from "../constant";

const initialState = [];

export default (state = initialState, action) => {
  const { products, min, max } = action;
  switch (action.type) {
    /*action fetch product list from req */
    case types.FETCH_DATA:
      state = products;
      return [...state];

    /*action fetch product bettwen price - price */
    case types.FILTER_PRICE_PRODUCT:
      let dataFiltered = products.filter(item => {
        return item.curentPrice >= min && item.curentPrice <= max;
      });
  
      state = dataFiltered;
      return [...state];
    default:
      return state;
  }
};
