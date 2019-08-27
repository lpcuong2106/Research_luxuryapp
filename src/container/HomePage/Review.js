import React from "react";
import "./Review.scss";
function ReviewAndPhone(props) {
  return (
    <div className="contact-reviewer">
      <div className="container">
        <div className="row">
          <div className="col-9   offset-3">
            <ul className="review contact-reviewer__read-mr">
              <li className="contact-reviewer__item  contact-reviewer__read-mr--item">
                <a href="/" className="icoin-chat">
                  <img src="images/review-icoin.png" alt="name" />
                </a>
              </li>
              <li className="contact-reviewer__item contact-reviewer__read-mr--item">
                <a href="/" className="contact-reviewer__item--read-review">
                  READ <br />
                  <span className="contact-reviewer__item--text-orange">
                    REVIEWS
                  </span>
                </a>
              </li>
              <li className="contact-reviewer__item contact-reviewer__read-mr--item">
                <a href="/" className="contact-reviewer__item--arrow-read-more">
                  <img src="images/arrow-icoin.png" alt="name" />
                </a>
              </li>
            </ul>
            <ul className="review">
              <li className="contact-reviewer__item">
                <a href="/">
                  <img
                    src="images/phone-content.png"
                    alt="name"
                    className="contact-reviewer__item--icoin-phone"
                  />
                </a>
              </li>
              <li className="contact-reviewer__item">
                <a href="/" className="contact-reviewer__item--read-review">
                  <p className="contact-reviewer__item--text-review">
                    CALL US NOW FOR <br />
                    <span className="contact-reviewer__item--text-orange">
                      HOME DELIVERY
                    </span>
                  </p>
                </a>
              </li>
            </ul>
            <ul className="review">
              <li className="contact-reviewer__item">
                <p className="contact-reviewer__item--read-review" />
                <h3 className="contact-reviewer__item--phone-number">
                  1-008 005 006
                </h3>
                <p />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewAndPhone;
