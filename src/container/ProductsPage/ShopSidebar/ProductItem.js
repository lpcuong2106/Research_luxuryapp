import React from "react";
import { Link } from "react-router-dom";

import "./ProductItem.scss";

function OurItem(props) {
  const { item } = props;
  if (!item) {
    return null;
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 realated__product sidebar__product">
      <div className="shopdetail__top--rating">
        <p className="shopdetail__top-rating--star">
          {item.rating} <i className="fas fa-star" />
        </p>
      </div>
      <div className="card text-center">
        <img className="card-img-top" src={item.image[0]} alt={item.name} />
        <div className="card-body realated__product-item--body">
          <h4 className="card-title realated__product-item--title">
            {item.title}
          </h4>
          <p className="card-text realated__product-item--text">
            <span className="shopdetail__top-price--sale">
              ${item.sale}
            </span>
            <span className="shopdetail__top-price--curent">
              ${item.curentPrice}
            </span>
          </p>
        </div>
        <span className="plus" onClick={() => props.onAddToCart(item)}>
          <img
            src="/images/icoin-plus.png"
            alt={item.name}
            className="product__plus"
          />
        </span>
      </div>
      <div className="realated__effect text-center">
        <Link to="/cart" className="realated__effect__link">
          <img
            src="/images/add-to-card.png"
            alt={item.name}
            className="realated__effect--cart"
          />
        </Link>
        <Link
          to={"/product/detail/" + item.type + "/" + item.id}
          className="realted__effect__link"
        >
          <img
            src="/images/icoin-heart.png"
            alt=""
            className="realated__effect--like"
          />
        </Link>
      </div>
    </div>
  );
}
export default OurItem;
