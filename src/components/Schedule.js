import React from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

class Calendar extends React.Component {

    render() {
 
        return (
 
            <Calendar
 
                startAccessor="start"
 
                endAccessor="end"
 
            />
 
        )
 
    }
 }
 export default Calendar;

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
