import React from "react"
import "./ProductCart.scss"

function ProductCart(props) {
  return (
    <div className="container product__cart">
      <h3 className="title-content">Product Cart</h3>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col md-9 col-lg-9  product__cart--left">
          <table className="table">
            <tbody>
              <tr className="table__th">
                <th className="table__table--title">Item</th>
                <th className="table__table--title" />
                <th className="table__table--title">Price</th>
                <th className="table__table--title">Qty</th>
                <th className="table__table--title">Subtotal</th>
              </tr>
              {props.children}
            </tbody>
          </table>
        </div>
        <div className="col-xs-12 col-sm-12 col md-3 col-lg-3  product__cart--right">
          <div className="checkout">
            <h3 className="checkout__title">Summary</h3>
            <p className="checkout__subtotal">
              Subtotal <span className="checkout__money">${props.subTotal}</span>
            </p>
            <p className="checkout__costship">
              Shipping cost <span className="checkout__money">${props.shipCost}</span>
            </p>
            <p className="checkout__tax">
              Tax <span className="checkout__money">%{props.Tax}</span>
            </p>
            <div className="checkout__bor--top">
              <p className="checkout__total">
                ODER TOTAL <span className="checkout__money">${props.oderTotal}</span>
              </p>
            </div>
            <a href="/" className="btn btn-orange">
              GO TO CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCart
