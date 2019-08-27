import React from "react"
import './Reserve.scss'
function Reserve() {
  return (
    <div className="container reserve">
      <h3 className="title-content reserve__title-content text-center">Reserve your table</h3>
      <div className="row reserve__grid">
        {/* begin col-6 */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6  reserve__left">
          <img
            src="images/product-559x334.jpg"
            alt="name"
            className="reserve__left__img img-fluid"
          />
        </div>
        {/* begin col-6 */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 reserve__right">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="form-group reserve__right__group">
                <input
                  type="text"
                  placeholder="Name*"
                  className="form-control reserve__right__group__input"
                />
                <img
                  src="images/icoin-name.png"
                  alt="name"
                  className=" reserve__right__group__icoin  icoin-name"
                />
              </div>
              <div className="form-group  reserve__right__group">
                <input
                  type="text"
                  placeholder="Time*"
                  className="form-control reserve__right__group__input"
                />
                <img
                  src="images/icoin-time.png"
                  alt="name"
                  className="reserve__right__group__icoin  icoin-time"
                />
              </div>
              <div className="form-group  reserve__right__group">
                <input
                  type="text"
                  placeholder="Guest*"
                  className="form-control reserve__right__group__input"
                />
                <img
                  src="images/icoin-guest.png"
                  alt="name"
                  className="reserve__right__group__icoin  icoin-guest"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="form-group  reserve__right__group">
                <input
                  type="text"
                  placeholder="Date*"
                  className="form-control reserve__right__group__input"
                />
                <img
                  src="images/icoin-clander.png"
                  alt="name"
                  className="reserve__right__group__icoin  icoin-clander"
                />
              </div>
              <div className="form-group  reserve__right__group">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="form-control reserve__right__group__input"
                />
                <img
                  src="images/icoin-email.png"
                  alt="name"
                  className="reserve__right__group__icoin  icoin-email"
                />
              </div>
              <div className="form-group reserve__right__group">
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className="form-control reserve__right__group__input"
                />
                <img
                  src="images/icoin-email.png"
                  alt="name"
                  className="reserve__right__group__icoin  icoin-email"
                />
              </div>
            </div>
          </div>
          <div className="reserve__right__contact">
            <ul className="reserve__right__contact__list">
              <li className="reserve__right__contact__list__item">
                <div className="btn btn-orange">MAKE RESERVATION</div>
              </li>
              <li className="reserve__right__contact__list__item">
                <p>
                  YOU CAN ALSO CALL <br />{" "}
                  <span className="text-pink">FOR A RESERVATION</span>
                </p>
              </li>
              <li className="reserve__right__contact__list__item">
                <h3 className="reserve__contact--number">1-007 000 005</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Reserve
