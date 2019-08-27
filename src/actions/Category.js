import {get} from "../api";
import * as types from "../constant";

/* Action fetch data category*/
export const actFetchCategory = () => dispatch =>
  get("get", "product")
    .then(res => {
      console.log(res);
      dispatch(listCategory => ({
        type: types.GET_CATEGORY,
        listCategory
      }));
    })
    .catch(err => console.log(err));
