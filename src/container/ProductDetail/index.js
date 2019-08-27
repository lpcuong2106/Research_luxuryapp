import React, { Component } from "react";


import Header from "../../components/Header";

import Detail from "./Detail";
import RelatedProduct from "../../components/Related";

import { GET } from "../../api";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  componentDidMount() {
    GET("product").then(res => {
      this.setState({
        productList: res
      });
    });
    // this.props.actFetchData();
  }

  /*show detail */
  showDetail = (productList, id) => {
    let result = null;
    if (productList.length < 0) {
      return false;
    }

    productList.forEach(item => {
      if (item.id.toString() === id) {
        result = item;
      }
    });
    return result;
  };

  render() {
    const { productList } = this.state;
    const { id } = this.props.match.params;
    if (!productList.length) {
      return null;
    }
    return (
      <React.Fragment>
        <Header headerTitle="Product Detail" />
        <Detail product={this.showDetail(productList, id)} />
        <RelatedProduct
          productList={productList}
          product={this.showDetail(productList, id)}
        />
      </React.Fragment>
    );
  }
}
export default index;