import React from "react"
import "./FoodMenu.scss"
function FoodMenu() {
  return (
    <div className="foodmenu">
      <h3 className="text-center title-content foodmenu__title">Food Menu</h3>
      {/* tab */}
      <div className="foodmenu__tab">
        <ul className="foodmenu__tab__list text-center">
          <li className="foodmenu__tab__list__item">
            <a href="/">
              <img
                src="images/tab-all.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab--all"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>All</strong>
            </p>
          </li>
          <li className="foodmenu__tab__list__item">
            <a href="/">
              <img
                src="images/tab-breakfast.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab--breakfast"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>Breakfast</strong>
            </p>
          </li>
          <li className="foodmenu__tab__list__item">
            <a href="/">
              {" "}
              <img
                src="images/tab-lunch.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab--lunch"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>Lunch</strong>
            </p>
          </li>
          <li className="foodmenu__tab__list__item">
            <a href="/">
              {" "}
              <img
                src="images/tab-snacks.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab--snacks"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>Snacks</strong>
            </p>
          </li>
          <li className="foodmenu__tab__list__item">
            <a href="/">
              {" "}
              <img
                src="images/tab-pizza.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab--pizza"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>Pizza</strong>
            </p>
          </li>
          <li className="foodmenu__tab__list__item">
            <a href="/">
              {" "}
              <img
                src="images/tab-soups.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab-soups"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>Soups</strong>
            </p>
          </li>
          <li className="foodmenu__tab__list__item">
            <a href="/">
              {" "}
              <img
                src="images/tab-dinner.png"
                alt="name"
                className="foodmenu__tab__list__item--img foodmenu__tab--dinner"
              />
            </a>
            <p className="foodmenu_tab--title">
              <strong>Dinner</strong>
            </p>
          </li>
        </ul>
      </div>
      {/* menu food */}
      <div className="container foodmenu__product">
        <div className="row">
          {/* col-6 */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 foodmenu__product__left">
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            
          </div>
         
          {/* col-6 */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 foodmenu__product__right">
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            {/* menu 1 product */}
            <div className="row foodmenu__product__item">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 foodmenu__product__item--pd-0">
                <div className="foodmenu__product__item--content">
                  <p className="foodmenu__product__item--name">
                    Ultimate organic fruit salad
                  </p>
                  <p className="foodmenu__product__item--detail">
                    survived not only five centuries but the leap
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-4 foodmenu__product__item__right">
                <p className="foodmenu__product__item__right--price">
                  <sup>$</sup>50.00
                </p>
              </div>
            </div>
            
          </div>
         
          
        </div>
      </div>
      <a href="/" className="btn btn-orange foodmenu__btn">
        EXPLOR FOOD MENU
      </a>
    </div>
  )
}
export default FoodMenu
