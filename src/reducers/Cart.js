import * as types from "../constant";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export default (state = initialState, action) => {
  const { item, quantity, id } = action;

  switch (action.type) {
    /* action add item to cart*/
    case types.ADD_TO_CART:
      let index = findIdOfItem(state, item.id);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state = [...state, { product: item, quantity: quantity }];
      }
      localStorage.setItem("cart", JSON.stringify(state));

      return [...state];

    /* action get cart list*/
    case types.CART_GET_LIST:
      return [...state];

    /* action remove item on cart*/
    case types.CART_REMOVE_ITEM:
      let newCart = state.filter(item => item.product.id !== id);
      state = newCart;
      console.log(id)
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];

    /*action update item on cart */
    case types.CART_UPDATE_QUANTITY:
      state.forEach(element => {
        if (element.product.id === id) return element === item;
      });
     
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

const findIdOfItem = (state, id) => {
  let result = -1;
  if (state.length > 0) {
    for (let i = 0; i < state.length; i++) {
      if (state[i].product.id === id) {
        result = i;
      }
    }
  }

  return result;
};
