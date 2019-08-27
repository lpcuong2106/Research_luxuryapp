import React from "react";
import Category from "../Category";
import NewsLetter from "../Newlerter";
import Paging from "../../../components/Paging";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <div className=" container sidebar">
      <div className="row">
        <div className="col-xs 12 col-sm-12 col-md-6 col-lg-3 sidebar__left">
          <Category />
          <NewsLetter />
        </div>
        <div className="col-xs 12 col-sm-12 col-md-8 col-lg-9 sidebar__right">
          {props.children}
          <Paging  totalPage={props.totalPage}/>
        </div>
      </div>
    </div>
  );
} 

export default Sidebar;
