import React from "react"
import "./Header.scss"
function Header(props) {
  return (
    <div className="contactbanner">
      <div className="contactbanner__item">
        <img
          src="/images/flow-left-icoin.png"
          alt="name"
          className="contactbanner__item__left--icoin"
        />
      </div>
      <div className="contactbanner__item">
        <h1 className="contactbanner__item__title">{props.headerTitle} Page</h1>
      </div>
      <div className="contactbanner__item">
        <img
          src="/images/flow-right-icoin.png"
          alt="name"
          className="contactbanner__item__right--icoin"
        />
      </div>
    </div>
  )
}
export default Header
