import React, { Component } from "react";
import Banner from "./Banner";
import ContactReview from "./Review";
import AboutRestaurent from "./AboutRestaurent";
import TodaySpecial from "./TodaySpecial";
import HappyClient from "./HappyClient";
import Reserve from "./Reserve";
import FoodMenu from "./FoodMenu";
export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <ContactReview />
        <AboutRestaurent />
        <TodaySpecial />
        <FoodMenu />
        <HappyClient />
        <Reserve />
      </React.Fragment>
    );
  }
}
