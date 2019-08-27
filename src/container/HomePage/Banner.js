import React from "react"
import "./Banner.scss"
function Banner(props) {
  return (
    <div className="banner">
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to={0} className="active" />
          <li data-target="#carouselId" data-slide-to={1} />
          <li data-target="#carouselId" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="images/banner-layer-4.jpg"
              alt="First slide"
              className="carousel-item--img-banner"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className=" carousel-caption--title">Teast your fav dish</h1>
              <div className="carousel-caption--carousel-address">
                from
                <span className="carousel-caption--text-orange">luxury restaurent</span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/banner-layer-2.jpg"
              alt="Second slide"
              className="carousel-item--img-banner"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className=" carousel-caption--title">Teast your fav dish</h1>
              <div className="carousel-caption--carousel-address">
                from
                <span className="carousel-caption--text-orange">luxury restaurent</span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/banner-layer-3.jpg"
              alt="Third slide"
              className="carousel-item--img-banner"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className=" carousel-caption--title">Teast your fav dish</h1>
              <div className="carousel-caption--carousel-address">
                from
                <span className="carousel-caption--text-orange">luxury restaurent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coffee-fel">
        <img src="images/coffe-logo.png" alt="name" className="coffee-fel--coffee-logo" />
        <p className="coffee-fel--title">
          Exlore <br />
          food Menu
        </p>
      </div>
    </div>
  )
}

export default Banner