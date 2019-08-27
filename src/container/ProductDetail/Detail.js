import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddToCart } from "../../actions/Cart";
import "./Detail.scss";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  /*plus quantity */
  quantityPlus = () =>
    this.setState({
      quantity: this.state.quantity + 1
    });

  /*minus quantity */
  quantityMinus = () => {
    if (this.state.quantity === 1) {
      return false;
    }
    this.setState({
      quantity: this.state.quantity - 1
    });
  };

  /*add to cart */
  onAddToCart = (item, quantity) => {
    this.props.actAddToCart(item, quantity);
  };

  render() {
    const { quantity } = this.state;
    const { product } = this.props;

    return (
      <div className="shopdetail">
        <div className="container shopdetail__top">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 shopdetail__top--left">
              <img
                src={product.image[0]}
                alt=""
                className="shopdetail__top--img"
              />
              <div className="shopdetail__zoom fas fa-search-plus" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 shopdetail__top--right">
              <h3 className="title-content">{product.title}</h3>
              <div className="shopdetail__top--rating">
                <p className="shopdetail__top-rating--star">
                  {product.rating} <i className="fas fa-star" />
                </p>
                <span className="shopdetail__top-rating--review">
                  ( {product.reviews.length} Reviews)
                </span>
              </div>
              <div className="shopdetail__top--price">
                <p className="shopdetail__top-price--sale">${product.sale}</p>
                <p className="shopdetail__top-price--curent">
                  ${product.curentPrice}
                </p>
              </div>
              <div className="shopdetail__top--desc">
                <p>{product.desc}</p>
              </div>
              <div className="shopdetail__top--feature">
                <ul className="shopdetail__top-feature--list">
                  <li className="shopdetail__top-feature--item">
                    <span className="minus-item" onClick={this.quantityMinus}>
                      -
                    </span>
                    <input
                      type="text"
                      className="shopdetail__top--quantity"
                      Value={this.state.quantity}
                    />
                    <span className="plus-item" onClick={this.quantityPlus}>
                      +
                    </span>
                  </li>
                  <li
                    className="shopdetail__top-feature--item btn btn-orange shopdetail__top--add"
                    onClick={() => this.onAddToCart(product, quantity)}
                  >
                    ADD TO CART
                  </li>
                  <li className="shopdetail__top-feature--item btn btn-orange shopdetail__top--buy">
                    Buy Now
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid shopdetail__bottom">
          <div className="container">
            <h4 className="shopdetail__bottom--decv">
              Description
              <span className="shopdetail__bottom--rev"> Reviews (03)</span>
            </h4>
            <p className="shopdetail__bottom--desctext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <span className="shopdetail__bottom--bol">
                Duis vitae orci in urna commodo mollis. <br />
                Ut sit amet sem ut dui bibendum blandit non finibus enim. <br />
                Cras convallis tellus ultrices, dictum nisl in, suscipit neque.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actAddToCart: (item, quantity) => dispatch(actAddToCart(item, quantity))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Detail);
