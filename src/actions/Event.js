import { GET } from "../api";
import * as Types from "../constant";

/* Action fetch data  event */
export const actFetchDataEvent = () => dispatch =>
  GET("event")
    .then(res => {
      dispatch({
        type: Types.FETCH_EVENT,
        events: res.data
      });
    })
    .catch(err => console.log(err));
 