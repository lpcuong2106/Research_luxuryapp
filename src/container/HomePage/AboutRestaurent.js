import React from "react";
import "./AboutRestaurent.scss";

function AboutRestaurent() {
  return (
    <div className="container about-restaurent">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 about-restaurent__about-content">
          <h3 className="about-restaurent__title-content">About Restaurent</h3>
          <p className="about-restaurent__content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged...
          </p>
          <div className="about-restaurent__read-more">
            <a href="/" className="btn btn-orange">
              READ MORE
            </a>
            <a href="/">
              <img
                src="images/more.jpg"
                alt="name"
                className="about-restaurent__read-more--more"
              />
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 about-restaurent__about-image">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pt-5">
              <a href="/">
                <img
                  src="images/product-270x150.jpg"
                  alt="name"
                  className="about-restaurent__about-image__img-product"
                />
              </a>
              <a href="/">
                <img
                  src="images/product-270x150.jpg"
                  alt=""
                  className="about-restaurent__about-image__img-product"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <a href="/">
                <img
                  src="images/product-270x150.jpg"
                  alt="name"
                  className="about-restaurent__about-image__img-product"
                />
              </a>
              <a href="/">
                <img
                  src="images/product-270x150.jpg"
                  alt="name"
                  className="about-restaurent__about-image__img-product"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutRestaurent;
