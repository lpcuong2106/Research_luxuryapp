import React from "react";
import { Link } from "react-router-dom";
import "./Address.scss";

function Address(props) {
  const { item } = props;
  return (
    <div className="address">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 address__left">
            <h3 className="title-content  address__left__title-content">
              Get in touch
            </h3>
            <div className="form-group address__group">
              <input
                type="text"
                className="form-control address__group__input grroup__icoin__name"
                name="name"
                id="name"
                placeholder="Name*"
              />
              <img
                src="/images/icoin-name.png"
                alt="name"
                className="address__group__icoin"
              />
            </div>
            <div className="form-group address__group">
              <input
                type="text"
                className="form-control address__group__input"
                name="email"
                id="email"
                placeholder="Email*"
              />
              <img
                src="/images/icoin-email.png"
                alt="name"
                className="address__group__icoin grroup__icoin__email"
              />
            </div>
            <div className="form-group address__group">
              <img
                src="/images/icoin-message.png"
                alt="name"
                className="address__group__icoin"
              />
              <textarea
                rows={4}
                cols={50}
                className="form-control address__group__input grroup__icoin__message"
                name="message"
                id="message"
                placeholder="Message*"
              />
            </div>
            <div className="btn btn-orange">SEND NOW</div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 address__right">
            <h3 className="title-content">Our Address</h3>
            <p className=" address__right__desc-adr">
              <span className="address__right__small">Address</span>
              <br />
              {item.address}
            </p>
            <p className="address__right__desc-phone">
              <span className="address__right__small">Phone</span>
              <br />+{item.phone}
            </p>
            <p className="address__right__desc-email">
              <span className="address__right__small">Email</span>
              <br />
              {item.email}
            </p>
            <p className="address__right__desc-follow">
              <span className="address__right__small">Follow us</span>
              <br />
            </p>
            <div className="address__right__societys">
              <ul className="address__right__societys__list">
                <li className="address__right__societys__list__item">
                  <Link to="" className="address__right__societys__list_link">
                    <img
                      src="/images/icoin-fb-footer.png"
                      alt="name"
                      className="address__right__societys__list__img"
                    />
                  </Link>
                </li>
                <li className="address__right__societys__list__item">
                  <Link to="" className="address__right__societys__list_link">
                    <img
                      src="/images/icoin-footer-twitter.png"
                      alt="name"
                      className="address__right__societys__list__img"
                    />
                  </Link>
                </li>
                <li className="address__right__societys__list__item">
                  <Link to="" className="address__right__societys__list_link">
                    <img
                      src="/images/icoin-ggl-footer.png"
                      alt="name"
                      className="address__right__societys__list__img"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;
