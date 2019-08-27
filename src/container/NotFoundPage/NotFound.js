import React from 'react'
import "./NotFound.scss"
function NotFound(){
  return(
    <div className="container-fluid notfound text-center">
      <div className="notfound__status">
          4 
          <img src="/images/notfound.png" alt="" className="notfound__img"/>
          4
      </div>
      <div className="notfound__text">
        <h3 className="notfound__text--fel">oops!!</h3>
        <p>The page you are looking for doesn't exit</p>
      </div>
    </div>
  )
}
export default NotFound