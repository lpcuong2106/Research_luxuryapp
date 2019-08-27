import { combineReducers } from "redux";
import products from "./Product";
import carts from "./Cart";
import categories from "./Category";
import events from "./Event";
import contacts from "./Contact";

export const appReducer = combineReducers({
  products,
  carts,
  categories,
  events,
  contacts
});
