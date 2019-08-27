import React from "react";
import { Link } from "react-router-dom";
import "./Paging.scss";

function Paging(props) {
  const totalPage = props.totalPage;

  let currentPage = localStorage.getItem("pageNumber")
    ? localStorage.getItem("pageNumber")
    : 1;

  if (currentPage < totalPage) {
    currentPage++;
    localStorage.setItem("pageNumber", currentPage);
  } else if (currentPage >= totalPage) {
    currentPage = 1;
  }

  return (
    <div className="event__paging">
      <ul className="event__paging--list">
        <li className="event_paging--item event_paging--pre">
          <Link
            to={`/product/page/${currentPage}`}
            className="event_paging--link"
          >
            <i className="fas fa-angle-left " /> PREV
          </Link>
        </li>
        <li className="event_paging--item">
          <Link to="/product/page/1" className="event_paging--link">
            1
          </Link>
        </li>
        <li className="event_paging--item">
          <Link to="/product/page/2" className="event_paging--link">
            2
          </Link>
        </li>
        <li className="event_paging--item">
          <Link to="/product/page/3" className="event_paging--link">
            3
          </Link>
        </li>

        <li className="event_paging--item event_paging--next">
          <Link
            to={`/product/page/${currentPage}`}
            className="event_paging--link"
          >
            NEXT<i className="fas fa-angle-right "> </i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Paging;
