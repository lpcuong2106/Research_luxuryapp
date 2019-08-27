import React, { Component } from "react"
import Header from "../../components/Header"
import DetailItem from "./DetailItem"
import EventFeauture from "./EventFeauture"

class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Header headerTitle="Event Detail"/>
        <DetailItem />
        <EventFeauture />
      </React.Fragment>
    )
  }
}

export default index
