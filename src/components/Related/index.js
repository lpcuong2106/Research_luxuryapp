import React, { Component } from "react";
import { connect } from "react-redux";
import RelatedItem from "./RelatedItem";
import { actAddToCart } from "../../actions/Cart";
import "./Related.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.product.type,
      id: this.props.product.id
    };
  }
  /*show rel */
  showRelatedItem = productList => {
    const { type, id } = this.state;
    const {actAddToCart} = this.props
    let number = 0;
    if (!productList.length) {
      return null;
    }
    return productList.map(item => {
      if (item.type === type && item.id !== id) {
        number++;
        if (number < 5) {
          return <RelatedItem key={item.id} item={item} onAddToCart={()=>actAddToCart(item)}/>;
        }
      }
      return false;
    });
  };
  render() {
    return (
      <div className="realated shopdetail__realated">
        <div className="container">
          <h3 className="title-content">Related Products</h3>
          <div className="row">
            {this.showRelatedItem(this.props.productList)}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actAddToCart: item => dispatch(actAddToCart(item, 1))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(index);
