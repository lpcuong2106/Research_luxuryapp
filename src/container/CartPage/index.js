import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import ShopingCart from "./ProductCart";
import CartItem from "./CartItem";
import { actRemoveItemOnCart } from "../../actions/Cart";
import { actAddToCart } from "../../actions/Cart";
import "./CartPage.scss";

class index extends Component {
  /*show Cart item */
  showCartList = cartList => {
    const { actRemoveItemOnCart } = this.props;
    if (cartList.length < 0) {
      return false;
    }
    return cartList.map(item => {
      return (
        <CartItem
          key={item.product.id}
          item={item}
          onClose={() => actRemoveItemOnCart(item.product.id)}
        />
      );
    });
  };
  
  /*show Sub total */
  showSubTotal = cartList => {
    let total = 0;
    if (cartList.length < 0) {
      return false;
    }
    cartList.forEach(item => {
      total += item.product.curentPrice * item.quantity;
    });

    let shipCost = 35000;
    let Tax = 10;
    let oderTotal = total + (total * Tax) / 100 + shipCost;

    return (
      <ShopingCart
        subTotal={total}
        shipCost={35000}
        Tax={10}
        oderTotal={oderTotal}
      >
        {this.showCartList(cartList)}
      </ShopingCart>
    );
  };

  // 
  render() {
    const { cartList } = this.props;

    return (
      <React.Fragment>
        <Header headerTitle="Cart" />

        {this.showSubTotal(cartList)}

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.carts,
    productList: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actRemoveItemOnCart: id => dispatch(actRemoveItemOnCart(id)),
    actAddToCart: item => dispatch(actAddToCart(item, 1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
