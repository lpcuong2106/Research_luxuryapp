import React from "react"
import "./Map.scss"
function Map() {
  return (
    <div className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.613113005729!2d106.69855391428686!3d10.76427096236263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f149960898d%3A0x16d16c554b75d3a9!2zMTA3IELhur9uIFbDom4gxJDhu5NuLCBQaMaw4budbmcgNiwgUXXhuq1uIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1552028901581"
        style={{ border: 0 }}
        allowFullScreen
        width="100%"
        height={650}
        title="EVERYDOY"
        frameBorder={0}
      />
    </div>
  )
}
export default Map
