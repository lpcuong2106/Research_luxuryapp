import React, { Component } from "react";


import EventData from "./EventData";
import OpenTime from "./OpenTime";
import Header from "../../components/Header";
import {GET} from '../../api'

class index extends Component {
  constructor(props){
    super(props)
    this.state={
      eventList:[]
    }
  }
  /*dispatch action actfetchDataEvent*/

  componentDidMount = () => {
    GET("event").then(res=>{
      this.setState({
      eventList:res
      })
    })
  };

  render() {
    const { eventList } = this.state;
    return (
      <React.Fragment>
        <Header headerTitle="Event" />
        <EventData eventList={eventList} />
        <OpenTime />
      </React.Fragment>
    );
  }
}


export default index
