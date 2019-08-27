import React from 'react'
import "./HappyClient.scss"
function HappyClient(){
return(
<div className="happyclient">
  <img src="images/product-241x241.jpg" alt="name" className="happyclient__productimg-top" />
  <div id="demo" className="carousel slide happyclient__slider" data-ride="carousel">
    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to={0} className="active" />
      <li data-target="#demo" data-slide-to={1} />
      <li data-target="#demo" data-slide-to={2} />
    </ul>
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <img src="images/happy-client.png" alt="Los Angeles" className="img-fluid carousel-item__happyclient__img" width={1100} height={500} />
        <div className="carousel-caption happyclient__text--center">
          <h3 className="carousel-item__title">Happy Clients</h3>
          <p className="carousel-item__description">
            <i className="fas fa-quote-left" />
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. 
            <i className="fas fa-quote-right" />
          </p>
          <div className="carousel-item__author">
            <img src="images/happy-client--author.png" alt="name" className="carousel-item__author--image" />
            <p className="carousel-item__author--name">DR. PRAPAKARAN JOHN</p>
            <div className="carousel-item__author--raiting">
              <ul className="carousel-item__rating__list">
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>   
      </div>
      <div className="carousel-item ">
        <img src="images/happy-client.png" alt="Los Angeles" className="img-fluid carousel-item__happyclient__img" width={1100} height={500} />
        <div className="carousel-caption happyclient__text--center">
          <h3 className="carousel-item__title">Happy Clients</h3>
          <p className="carousel-item__description">
            <i className="fas fa-quote-left" />
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. 
            <i className="fas fa-quote-right" />
          </p>
          <div className="carousel-item__author">
            <img src="images/happy-client--author.png" alt="name" className="carousel-item__author--image" />
            <p className="carousel-item__author--name">DR. PRAPAKARAN JOHN</p>
            <div className="carousel-item__author--raiting">
              <ul className="carousel-item__rating__list">
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>   
      </div>
      <div className="carousel-item ">
        <img src="images/happy-client.png" alt="Los Angeles" className="img-fluid carousel-item__happyclient__img" width={1100} height={500} />
        <div className="carousel-caption happyclient__text--center">
          <h3 className="carousel-item__title">Happy Clients</h3>
          <p className="carousel-item__description">
            <i className="fas fa-quote-left" />
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. 
            <i className="fas fa-quote-right" />
          </p>
          <div className="carousel-item__author">
            <img src="images/happy-client--author.png" alt="name" className="carousel-item__author--image" />
            <p className="carousel-item__author--name">DR. PRAPAKARAN JOHN</p>
            <div className="carousel-item__author--raiting">
              <ul className="carousel-item__rating__list">
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
                <li className="carousel-item__rating--item text-yellow">
                  <i className="fas fa-star" />
                </li>
              </ul>
            </div>
          </div>
        </div>   
      </div>
   
    </div>
    <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon" />
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon" />
    </a>
  </div>
</div>

)
}
export default HappyClient