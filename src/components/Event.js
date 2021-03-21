import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Event = ({ img, time, title }) => {

  return (
    <Container>
      <Link to='/book'>
      <div style={{ backgroundImage: `url(${img})` }}></div>
      <h3>{title}</h3>
      <p>{time}</p>
      </Link>
    </Container>
  );
};

export default Event;

const Container = styled.div`
  margin-right: 40px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  a {
  color: black;
  text-decoration: none;
  }

  div {
    width: 280px;
    height: 150px;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h3,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    color: #9b9b9b;
  }

  :hover {
    background: #ededed;
  }
`;
