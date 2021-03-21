import React from "react";
import styled from "styled-components";

const UpcomingEvent = ({ day, date, name, time, image }) => {
  return (
    <Container>
      <div
        className="top"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="date">
          <p>{day} </p>
          <span>{date}</span>
        </div>
      </div>
      <div className="bottom">
        <h4>{name}</h4>
        <p>{time}</p>
        <button>Register</button>
      </div>
    </Container>
  );
};

export default UpcomingEvent;

const Container = styled.div`
  height: 280px;
  width: 230px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
  margin-right: 40px;

  :hover {
    background: #ededed;
  }

  .date {
    padding: 5px 0;
    color: #fdc500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    background: rgba(0, 0, 0, 0.6);
    font-weight: 500;

    p,
    span {
      margin: 0;
    }
  }

  .top {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bottom {
    padding: 8px 5px;

    h4,
    p {
      margin: 3px;
    }

    button {
      width: 100%;
      background: #fdc500;
      border: none;
      padding: 4px 0;
      cursor: pointer;
      margin: 10px 0;
      font-weight: 700;
    }
  }

  div {
    flex: 0.5;
  }
`;
