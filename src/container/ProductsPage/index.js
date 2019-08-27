import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import SideBar from "./ShopSidebar/SideBar";
import ProductList from "./ShopSidebar/OursProduct";
import { actFetchData } from "../../actions/Product";
import { actAddToCart } from "../../actions/Cart";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: 0
    };
  }

  /*fetch data from api */
  componentDidMount = () => {
    this.props.fetchData();
  };

  render() {
    const { addToCart, match } = this.props;
    const { productQuantity } = this.state;
    const { productList } = this.props;
    return (
      <React.Fragment>
        <Header headerTitle="Product" />
        <SideBar totalPage={productList.length / 9}>
          <ProductList
            result={productQuantity}
            productQuantity={productList.length}
            productList={productList}
            match={match}
            addToCart={addToCart}
          />
        </SideBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    /* Get product list */
    productList: state.products,

    /* Get cart list */
    cartList: state.carts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // /* Action fetch data from req */
    fetchData: () => dispatch(actFetchData()),

    /* Action fetch cart from localStrotage */
    addToCart: item => dispatch(actAddToCart(item, 1))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
