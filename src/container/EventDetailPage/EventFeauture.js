import React from "react"
import "./EventFeauture.scss"
function EventFeauture() {
  return (
    <div className="feature_event">
      <div className="container">
        <h3 className="title-content">Featured Events</h3>
        <div className="row">
          {/* 1 item */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4  feature__event--product">
            <div className="card text-left">
              <img
                className="card-img-top"
                src="/images/product-370x210.jpg"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title cart__event--title">
                  Event Deading here
                </h4>
                <img
                  src="/images/icoin-watch.png"
                  alt=""
                  className="feature__event--img"
                />
                <p className="feauture__event--time">7.00 pm - 10.00 pm</p>
                <p className="card-text cart__event--text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          {/* 1 item */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4  feature__event--product">
            <div className="card text-left">
              <img
                className="card-img-top"
                src="/images/product-370x210.jpg"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title cart__event--title">
                  Event Deading here
                </h4>
                <img
                  src="/images/icoin-watch.png"
                  alt=""
                  className="feature__event--img"
                />
                <p className="feauture__event--time">7.00 pm - 10.00 pm</p>
                <p className="card-text cart__event--text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          {/* 1 item */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4  feature__event--product">
            <div className="card text-left">
              <img
                className="card-img-top"
                src="/images/product-370x210.jpg"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title cart__event--title">
                  Event Deading here
                </h4>
                <img
                  src="/images/icoin-watch.png"
                  alt=""
                  className="feature__event--img"
                />
                <p className="feauture__event--time">7.00 pm - 10.00 pm</p>
                <p className="card-text cart__event--text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventFeauture
