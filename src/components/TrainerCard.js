import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TrainerCard = ({ title, image, bio }) => {
  return (
    <Container>
      <div
        className="trainer-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <trainerInfo className="mainInfo">
        <h2>{title}</h2>
        <p>{bio}</p>

        <Link to="/book">
          <h6>Book</h6>
        </Link>
      </trainerInfo>
    </Container>
  );
};

export default TrainerCard;

const Container = styled.div`
  color: black;
  width: 80%;
  border: 3px #9b9b9b solid;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  
  h2 {
    color: black;
    font-size: 2rem;
    margin: 0px 20px;
  }

  .trainer-image {
    border-radius: 28px;
    height: 250px;
    width: 800px;
    margin: 20px 50px 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  p {
    margin-right: 50px;
    font-size 14px;
  }

  h6 {
    border-radius: 15px;
    border: black;
     height: 2rem;
    width: 11rem;
      
      background-color: #FDC500;
      color: black;
      font-size: 20px;
    text-align: center;
    font-weight: 750;
    transition: all 0.4s;
    cursor: pointer;
    text-decoration: none;
    padding-top: 3px;

    :hover {
        box-shadow: 0px 8px 13px -2px rgba(0,0,0,0.39); 
    }


  }

a {
text-decoration: none;
}
`;
