import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import Events from "../EventList";
import * as dates from '../../src/utils/dates/dates'

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const Schedule = () => {
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar
       
    events={Events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2021, 1, 3), 'day'), -1, 'hours')}
    defaultDate={new Date(2021, 1, 31)}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
      />
    </div>
  );
};

export default Schedule;
