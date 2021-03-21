import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <Container class="center">
      <h1> Your Schedule </h1>
      <div class="center">
        <Calendar onChange={onChange} value={date} />
      </div>
    </Container>
  );
};

export default Schedule;

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
