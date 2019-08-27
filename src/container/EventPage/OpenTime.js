import React from "react"
import "./OpenTime.scss"
function OpenTime() {
  return (
    <div className="opentime">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-3 opentime__left">
            <h3 className="title-content  opentime__title-content">Opening Hours</h3>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-9 opentime__right">
            <div className="opentime__day opentime__day-current">
              <p className="opentime__day--text--i">Monday to Friday</p>
              <p className="opentime__day--time">
                <strong>10am - 10pm</strong>
              </p>
            </div>
            <div className="opentime__day opentime__day-holi">
              <p className="opentime__day--text--i">Saturday to Sunday</p>
              <p className="opentime__day--time">
                <strong>9am - 11pm</strong>
              </p>
            </div>
          </div>
        </div>
        <img
          src="images/product-241x241.jpg"
          alt="name"
          className="opentime__img"
        />
      </div>
    </div>
  )
}
export default OpenTime
