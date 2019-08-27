import { GET } from "../api";
import * as types from "../constant";

/* Action fetch data  event */
export const actFetchContact = () => dispatch =>
  GET("contact")
    .then(res =>
      dispatch({
        type: types.FETCH_CONTACT,
        contacts: res.data
      })
    ) 
    .catch(err => console.log(err));
