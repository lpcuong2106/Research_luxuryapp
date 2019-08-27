import React, { Component } from "react";
import { connect } from "react-redux";
import { actUpdateItemOnCart } from "../../actions/Cart";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    });
  }
  /*on change quantity */
  onChangeHandle = e => {
    const { item } = this.state;
    item.quantity = e.target.value;
    this.setState({
      item
    });
    this.props.actUpdateItemOnCart(item,item.product.id)
  };

  /*remove item on cart */
  onClose = id => {
    this.props.onClose(id); 
  };

  render() {
    const { item } = this.state;
    if (!item) {
      return null;
    }
    return (
      <tr className="product__item">
        <td className="product__item--img">
          <img
            src={item.product.image[0]}
            alt={item.product.title}
            className="product__item__product--pic"
          />
          <img
            src="/images/icoin-close.png"
            alt={item.product.title}
            className="product__item__product--rem"
            onClick={() => this.onClose(item.product.id)}
          />
        </td>
        <td className="product__item--name">{item.product.title}</td>
        <td className="product__item--price">${item.product.curentPrice}</td>
        <td className="product__item--numb">
          <input
            type="text"
            name="quantity"
            value={item.quantity}
            onChange={this.onChangeHandle}
            className="product__item--input"
          />
        </td>
        <td className="product__item--sub">
          ${item.quantity * item.product.curentPrice}
        </td>
      </tr>
    );
  }
}

const mapDispatchToPorps = dispatch => {
  return {
    actUpdateItemOnCart: (item, id) => dispatch(actUpdateItemOnCart(item, id))
  };
};
export default connect(
  null,
  mapDispatchToPorps
)(index);
