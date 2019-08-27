import * as types from "../constant";

/* aciton add item to cart */
export const actAddToCart = (item, quantity) => ({
  type: types.ADD_TO_CART,
  item,
  quantity
});

/* action remove item on carts  */
export const actRemoveItemOnCart = id => ({
  type: types.CART_REMOVE_ITEM,
  id
});

/* action update quantity*/ 
export const actUpdateItemOnCart = (item, id) => ({
  type: types.CART_UPDATE_QUANTITY,
  item,
  id
});
