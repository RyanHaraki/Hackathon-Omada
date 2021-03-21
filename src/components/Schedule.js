import { Calender, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React from "react";
import styled from "styled-components";

const localizer = momentLocalizer(moment);

const MyCalendar = props => (
  <div>
    <Calender
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

const Container = styled.div`
  h1 {
    color: black;

    margin-left: 60px;
    font-size: 3rem;
    font-weight: 600;
  }

.center {
    display: flex;
    align-items; center;
    justify-content: center;
}

  .react-calendar { 
      margin: 0;
        width: 600px;   
  }
`;

