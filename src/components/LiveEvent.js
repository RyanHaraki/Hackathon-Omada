import React from "react";
import styled from "styled-components";

const LiveEvent = () => {
  return (
    <Container>
      <div className="live">Live</div>
      <div className="title-wrapper">
        <div className="title">
          <p>Throw Punches with Victoria Smith</p>
        </div>
      </div>
    </Container>
  );
};

export default LiveEvent;

const Container = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  background-image: url("https://www.polar.com/blog/wp-content/uploads/2020/01/8-at-home-workouts-on-demand-main.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  padding: 5px;
  transition: all 0.4s;

  :hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 13px -2px rgba(0, 0, 0, 0.39);
  }

  .live {
    color: white;
    background: red;
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-size: 1.5rem;
    position: relative;
    top: 10px;
    left: 10px;
    font-weight: 500;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    color: #fcd500;
    font-size: 1.7rem;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;

    p {
      margin: 10px;
      padding: 0;
    }
  }
`;
