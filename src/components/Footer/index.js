import React from "react"
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="container footer__border-bottom">
        <div className="row">
          
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 footer__menu footer__newletters">
            <h3 className="title-content footer__title-content">Navigation</h3>
            <ul className="footer__list">
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  Home
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  About us
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  Menu
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  Reservation
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  Recipe
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  Blog
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 footer__menu footer__newletters">
            <h3 className="title-content footer__title-content">News letter</h3>
            <p className="footer__newletters__desc">
              Enter your email address and subscribe daily newsletter
            </p>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-10 footer__newletters__left">
                <div className="form-group  reserve__group footer__newletters__left__form">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="form-control form__seserve--input  footer__newletters__left__form__input"
                  />
                  <img
                    src="/images/icoin-email-footer.png"
                    alt="name"
                    className="reserve__icoin  footer__newletters__left__form__icoin-email"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 footer__newletters__right">
                <div className="btn btn-orange">SUBSCRIBE</div>
              </div>
              <ul className="footer__newletters__societys-list">
                <li className="footer__newletters__societys-list__item">
                  <a href="/" className="footer__list__item__link">
                    <img
                      src="/images/icoin-fb-footer.png"
                      alt="name"
                      className="footer__newletters--societys--icoin"
                    />
                  </a>
                </li>
                <li className="footer__newletters__societys-list__item">
                  <a href="/" className="footer__list__item__link">
                    <img
                      src="/images/icoin-footer-twitter.png"
                      alt="name"
                      className="footer__newletters--societys--icoin"
                    />
                  </a>
                </li>
                <li className="footer__newletters__societys-list__item">
                  <a href="/" className="footer__list__item__link">
                    <img
                      src="/images/icoin-ggl-footer.png"
                      alt="name"
                      className="footer__newletters--societys--icoin"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 footer__menu footer__ourapp">
            <h3 className="title-content footer__title-content">Our App avilale</h3>
            <a href="/" className="footer__list__item__link">
              <img
                src="/images/apple-store.png"
                alt="name"
                className="footer__ourapp__mobile"
              />{" "}
            </a>
            <a href="/" className="footer__list__item__link">
              <img
                src="/images/google-play.png"
                alt="name"
                className="footer__ourapp__mobile"
              />
            </a>
          </div>
        
        </div>
      </div>

      <div className="footer__license text-center">
        <p className="footer__license__text">
          <span className="footer__license__text--gray">2016</span>
          <sup>©</sup> LUXURY RESTAURANT,{" "}
          <span className="footer__license__text--gray">ALL RIGHTS RESERVE</span>
        </p>
      </div>
    </div>
  )
}
export default Footer
 