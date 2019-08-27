import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./OursProduct.scss";

class index extends Component {
  /* show product item  */

  showProduct = productList => {
    const { addToCart } = this.props; 
    const { match } = this.props;
    
    if (productList.length < 0) {
      return false;
    }
    // get product of type (direction)
    if (match) {
      const { direction } = this.props.match.params;
      if (direction) {
        return productList.map(item => {
          if (item.type === direction) {

            return (
              <ProductItem
                key={item.id}
                item={item}
                /* Add to card */
                onAddToCart={() => addToCart(item)}
              />
            );
          }
          return false;
        });
      }
    }

    //paging
    if (match) {
      localStorage.setItem("pageNumber",match.params.id)
      const page  = match.params.id
      const productNumber = 9 ;
      return productList
        .slice(
          page * productNumber - productNumber,
          page * productNumber
        )
        .map(item => {
          return (
            <ProductItem
              key={item.id}
              item={item}
              /* Add to card */
              onAddToCart={() => addToCart(item)}
            />
          );
        });
    }

    return productList.slice(0, 9).map(item => {
      return (
        <ProductItem
          key={item.id}
          item={item}
          /* Add to card */
          onAddToCart={() => addToCart(item)}
        />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="title-content">Our Products</h3>
        <ul className="sidebar__right--feauture">
          <li className="sidebar__right--item sidebar__right--sorting">
            <input
              type="text"
              className="sidebar__right--sortinput"
              placeholder="Default Sourting"
            />
            <img
              src="/images/icoin-dropdown.png"
              alt=""
              className="sidebar__right--dropdown"
            />
          </li>
          <li className="sidebar__right--item sidebar__right--icoin">
            <img
              src="/images/icoin-grid-view.png"
              alt=""
              className="sidebar__right--gridview"
            />
            <img
              src="/images/icoin-toggle.png"
              alt=""
              className="sidebar__right--listview"
            />
          </li>
          <li className="sidebar__right--item sidebar__right--quantity">
            <p>
              Showing {this.props.result} of {this.props.productQuantity}
              products
            </p>
          </li>
        </ul>
        <div className="row sidebar__right--products">
          {this.showProduct(this.props.productList)}
        </div>
      </React.Fragment>
    );
  }
}
export default index;
