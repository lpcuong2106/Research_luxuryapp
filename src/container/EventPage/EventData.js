import React from "react";
import EventItem from "./EventItem";
import Paging from "../../components/Paging";
import "./EventData.scss";

function EventData(props) {
  const { eventList } = props;
  return (
    <div className="container event">
      {eventList
        ? eventList.map(item => <EventItem key={item.id} item={item} />)
        : null}
      <Paging />
    </div>
  );
}
export default EventData;
