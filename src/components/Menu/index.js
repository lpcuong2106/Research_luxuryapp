import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Menu.scss";

function Menu(props) {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/restaurent-logo.png"
              alt="name"
              className="navbar-brand--img-logo"
            />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  PRODUCT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  EVENT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <div className="cart-icoin">
                    <img
                      src="/images/cart-icoin.png"
                      alt="name"
                      className="cart-img"
                    />
                    <span className="cart-quantity">
                      {props.cartQuantity.length}
                    </span>
                    <div className="fas fa-caret-down dropdown-cart-custom" />
                  </div>
                </Link>
              </li>
              <li className="nav-item book-tabke">
                <Link className="nav-link book-table-link" to="/product">
                  <img
                    src="/images/1475856660_food-drink-36.png"
                    alt="name"
                    className="btn-drink-food"
                  />
                  <span className="btn-book-title">BOOK YOUR TABLE</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartQuantity: state.carts
  };
};
export default connect(mapStateToProps)(Menu);
