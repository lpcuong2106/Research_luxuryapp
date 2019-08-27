import React, { Component } from "react";
import Header from "../../components/Header";
import Map from "./Map";
import Address from "./Address";

import { GET } from "../../api";
class index extends Component {
  constructor(props) {
    super(props);
    this.state={
      contact:{}
    }
  }
  /* fetch data contact */
  componentDidMount() {
    GET("contact").then(res=>{
      this.setState({
        contact:res
      })
    })
  }

  render() {
    const { contact } = this.state;
    return (
      <div className="contact-page">
        <Header headerTitle="Contact" />
        <Map />
        <Address item={contact} />
      </div>
    );
  }
}

export default index;
