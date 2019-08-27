import React from "react";
import HomePage from "./container/HomePage";
import ContactPage from "./container/ContactPage";
import EventPage from "./container/EventPage";
import EventDetailPage from "./container/EventDetailPage";
import ProductDetail from "./container/ProductDetail";
import CartPage from "./container/CartPage";
import ProductsPage from "./container/ProductsPage";
import NotFoundPage from "./container/NotFoundPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <HomePage />
  },

  {
    path: "/contact",
    exact: true,
    component: () => <ContactPage />
  },

  {
    path: "/event",
    exact: true,
    component: () => <EventPage />
  },

  {
    path: "/event/detail",
    exact: true,
    component: () => <EventDetailPage />
  },

  {
    path: "/product",
    exact: true,
    component: () => <ProductsPage />
  },

  {
    path: "/product/:direction(tshirt|coat|short|kaki|shirt|jean)",
    exact: true,
    component: ({ match }) => <ProductsPage match={match} />
  },

  {
    path: "/product/page/:id",
    exact: true,
    component: ({ match }) => <ProductsPage match={match} />
  },

  {
    path: "/product/detail/:type/:id",
    exact: true,
    component: ({ history, match }) => (
      <ProductDetail history={history} match={match} />
    )
  },

  {
    path: "/cart",
    exact: true,
    component: () => <CartPage />
  },

  {
    path: "",
    exact: false,
    component: () => <NotFoundPage />
  }
];
export default routes;
