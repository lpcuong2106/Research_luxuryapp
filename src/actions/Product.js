import { GET } from "../api";
import * as types from "../constant";

/* Action fetch data */
export const actFetchData = () => dispatch =>
  GET("product")
    .then(res =>
      dispatch({
        type: types.FETCH_DATA,
        products: res
      })
    )
    .catch(err => console.log(err));

/*action get Category */
export const actgetCategory = item => ({
  type: types.GET_CATEGORY,
  item
});

/* Product  - filter  price*/
export const actFilterPrice = (min, max) => dispatch =>
  GET("product")
    .then(res => {
      dispatch({
        type: types.FILTER_PRICE_PRODUCT,
        products: res,
        min,
        max
      });
    })
    .catch(err => console.log(err));
