import React from "react";
import { Link } from "react-router-dom";

function index(props) {
  const { item } = props;
  
  if (!item) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="row event__item">
        <div className="col-xs-2 col-sm-4 col-md-3 col-lg-1 event__item__date--bg text-center">
          <div className="event__item__date event__item__date--border">
            <span className="event__item__date--day">{item.date.day}</span>
            <br />
            <span className="event__item__date--month">
              {item.date.month}
            </span>
            <br />
            <span className="event__item__date--year">{item.date.year}</span>
          </div>
        </div>
        <div className="col-xs-10 col-sm-8 col-md-9 col-lg-6">
          <div className="event__item__product">
            <img
              src={item.image}
              alt="name"
              className="event__item__product__img"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
          <h3 className="title-content event__item__title-content">
            {item.title}
          </h3>
          <div className="event__item__detail">
            <img
              src="images/icoin-watch.png"
              alt="name"
              className="event__item__detail__tiktok"
            />
            <p className="event__item__detail__time">
              <strong>
                {item.startTime} - {item.endTime} pm
              </strong>
            </p>
            <p className="event__item__detail__decs">{item.descriptions.substr(0,200)}...</p>
            <Link
              to="/event/detail"
              className="btn btn-orange event__item__detail__view"
            >
              VIEW EVENT DETAILS
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default index;
