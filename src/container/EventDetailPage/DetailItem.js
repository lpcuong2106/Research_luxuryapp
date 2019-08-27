import React from "react"
import "./DetailItem.scss"


function DetailItem() {
  return (
    <div className="container event eventdetail">
      {/* 1 item */}
      <div className="row event__product__item">
        <div className="col-xs-2 col-sm-4 col-md-3 col-lg-1 event__item__date--bg text-center">
          <div className="event__item__date event__item__date--border">
            <span className="event__item__date--day">08</span> <br />
            <span className="event__item__date--month">NOV</span> <br />
            <span className="event__item__date--year">2016</span>
          </div>
        </div>
        <div className="col-xs-10 col-sm-8 col-md-9 col-lg-11">
          <div className="event__item__product">
            <img
              src="/images/product-579x340.jpg"
              alt="name"
              className="event__item__product__img"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-11 offset-1">
          <h3 className="title-content">Event Heading Here</h3>
          <div className="event__detail">
            <img
              src="/images/icoin-watch.png"
              alt=""
              className="event__img--tiktok"
            />
            <p className="event__detail--time">
              <strong>7.00 - 10.00 pm</strong>
            </p>
            <p className="event__detail--decs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
      <div className="row eventdetail__info">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  eventdetail__info--left">
          <ul className="eventdetail__info--list">
            <li className="eventdetail__info--item">
              <i className="fas fa-angle-right" />
              Pellentesque quis sem aliquet
            </li>
            <li className="eventdetail__info--item">
              <i className="fas fa-angle-right" />
              Aliquam dictum erat faucibus magna
            </li>
            <li className="eventdetail__info--item">
              <i className="fas fa-angle-right" />
              Nullam auctor ipsum a elit condimentum
            </li>
            <li className="eventdetail__info--item">
              <i className="fas fa-angle-right" />
              Sed sed velit et ipsum faucibus
            </li>
            <li className="eventdetail__info--item">
              <i className="fas fa-angle-right" />
              Aenean consequat velit in mollis
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  eventdetail__info--right">
          <img
            src="/images/product-530x246.jpg"
            alt=""
            className="eventdetail__info--img"
          />
        </div>
      </div>
      <div className="eventdetail__info--text">
        <p>
          Leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
      </div>
      <div className="row eventdetail__paging">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8  eventdetail__paging--left">
          <ul className="event__paging--list eventdetail__paging--list">
            <li className="event_paging--item event_paging--next">
              <a href className="event_paging--link">
                <i className="fas fa-angle-left " /> NEXT
              </a>
            </li>
            <li className="event_paging--item event_paging--pre">
              <a href className="event_paging--link">
                PREV <i className="fas fa-angle-right "> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4  eventdetail__paging--right">
          <ul className="eventdetail__social--list">
            <li className="eventdetail__social--item">
              <a href className="eventdetail__social--link">
                <i className="fas fa-share-alt" />
              </a>
            </li>
            <li className="eventdetail__social--item">
              <a href className="eventdetail__social--link">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="eventdetail__social--item">
              <a href className="eventdetail__social--link">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="eventdetail__social--item">
              <a href className="eventdetail__social--link">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default DetailItem
