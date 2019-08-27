import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

function Category() {
  return (
    <div className="sidebar__left sidebar__left--top">
      <h3 className="title-content sidebar__left__title-content">
        Fashion Category
      </h3>
      <ul className="sidebar__left__list">
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link to="/product" className="sidebar__left__list__item--link">
            All Product
          </Link>
        </li>
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link
            to="/product/tshirt"
            className="sidebar__left__list__item--link"
          >
            T-shirt
          </Link>
        </li>
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link to="/product/coat" className="sidebar__left__list__item--link">
            Coat
          </Link>
        </li>
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link to="/product/short" className="sidebar__left__list__item--link">
            Short
          </Link>
        </li>
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link to="/product/kaki" className="sidebar__left__list__item--link">
            Kaki
          </Link>
        </li>
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link to="/product/shirt" className="sidebar__left__list__item--link">
            Shirt
          </Link>
        </li>
        <li className="sidebar__left__list__item">
          <i className="fas fa-angle-right" />
          <Link to="/product/jean" className="sidebar__left__list__item--link">
            Jean
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Category;
