import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Trainer = ({ image, name }) => {
  return (
    <Link to="/trainers">
      <Container style={{ backgroundImage: `url(${image})` }}>
        <div>
          <h2>{name}</h2>
        </div>
      </Container>
    </Link>
  );
};

export default Trainer;

const Container = styled.div`
  background: red;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdc500;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 40px;
  margin-bottom: 4px;


  div {
    padding: 4px 3px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;

    h2 {
      margin: 0;
    }
  }
`;
