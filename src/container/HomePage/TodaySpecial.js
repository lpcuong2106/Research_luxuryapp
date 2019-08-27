import React from "react";
import "./TodaySpecial.scss";
function TodaySpecial() {
  return (
    <div className="today-spcecial">
      <div className="container today-spcecial__special__product-list ">
        <h3 className="text-center title-content today-spcecial__title-content">
          Today Special
        </h3>
        <div className="row today-spcecial__product-content">
          {/* 1 product */}
          <div className="col-xs-12 col-12-12 col-md-12 col-lg-6 special__product--item ">
            <div className="card text-left">
              <img
                className="card-img-top"
                src="images/product-569x420-01.jpg"
                alt="name"
              />
              <div className="card-body text-center">
                <h4 className="today-spcecial__product-content__card-title">
                  <strong>Food Name One</strong>
                </h4>
                <p className="today-spcecial__product-content__card-text">
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled.
                </p>
                <div className="today-spcecial__product-content__card-footer">
                  <ul className="footer-product">
                    <li className="footer-product__item footer-product__left">
                      HOME <br /> <span className="footer-product__text-pink text-pink">DELIVARY</span>
                    </li>
                    <li className="footer-product__item footer-product__center">
                      <h3 className="footer-product__phone-number">1-008 005 006</h3>
                    </li>
                    <li className="footer-product__item footer-product__right">
                      <h3 className="product__item--price text-orange today-spcecial__text-orange text-right">
                        <sup className="type__money">$</sup>89.00
                      </h3>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          {/* 1 product */}
          <div className="col-xs-12 col-12-12 col-md-12 col-lg-6 special__product--item ">
            <div className="card text-left">
              <img
                className="card-img-top"
                src="images/product-569x420-02.jpg"
                alt="name"
              />
              <div className="card-body text-center">
                <h4 className="today-spcecial__product-content__card-title">
                  <strong>Food Name One</strong>
                </h4>
                <p className="today-spcecial__product-content__card-text">
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled.
                </p>
                <div className="today-spcecial__product-content__card-footer">
                  <ul className="footer-product">
                    <li className="footer-product__item footer-product__left">
                      HOME <br /> <span className="footer-product__text-pink text-pink">DELIVARY</span>
                    </li>
                    <li className="footer-product__item footer-product__center">
                      <h3 className="footer-product__phone-number">1-008 005 006</h3>
                    </li>
                    <li className="footer-product__item footer-product__right">
                      <h3 className="product__item--price text-orange today-spcecial__text-orange text-right">
                        <sup className="type__money">$</sup>89.00
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-spcecial__product__bottom text-right today-spcecial__product__bottom--text-right">
          <img
            src="images/product-311x311.jpg"
            alt="name"
            className="today-spcecial__product__bottom--img"
          />
        </div>
      </div>
    </div>
  );
}
export default TodaySpecial;
