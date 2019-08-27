import React, { Component } from "react";
import { connect } from "react-redux";
import "./Newletter.scss";

import InputRange from "react-input-range";
import { actFilterPrice } from "../../actions/Product"

class NewsLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 50000, max: 2000000 }
    };
  }

  // Filter price handle
  onChange = value => {
    // get product
    this.props.actFilterPrice(value.min, value.max);
    this.setState({ value });
  };

  render() {
    return (
      <div className="sidebar__left sidebar__left__bottom">
        <h3
          className="title-content 
      sidebar__left__bottom__title-content"
        >
          Filter by Price
        </h3>

        <InputRange
          maxValue={2000000}
          minValue={0}
          value={this.state.value}
          onChange={this.onChange}
        />

        <div className="sidebar__left__news-contact">
          <div className="sidebar__left__letter text-center">
            <h3 className="title-content sidebar__left__letter__title-content">
              Newsletter
            </h3>
            <p className="sidebar__left__letter__text">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <div className="sidebar__left__letter__contact">
              <input
                type="text"
                placeholder="Email Address"
                className="form-control form__seserve--input sidebar__left__letter__contact__input"
              />
              <img
                src="/images/icoin-email-footer.png"
                alt=""
                className="reserve__icoin  sidebar__left__letter__contact__icoin-email-footer"
              />
            </div>
            <div className="btn btn-orange sidebar__left__letter__btn">
              SUBSCRIBE
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actFilterPrice: (min, max) => dispatch(actFilterPrice(min, max))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NewsLetter);
