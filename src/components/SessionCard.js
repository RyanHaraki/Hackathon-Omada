import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SessionCard = ({ title, image, bio, time }) => {
  return (
    <Container>
      <div
        className="trainer-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <trainerInfo className="mainInfo">
        <h2>{title}</h2>
        <p>{bio}</p>
        <p>{time}</p>
        <Link to="/book">
          <h6>Select</h6>
        </Link>
      </trainerInfo>
    </Container>
  );
};

export default SessionCard;

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
    width: 900px;
    margin: 20px 20px 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  p {
    margin: 20px 20px;
    font-size 14px;
  }

  h6 {
    border-radius: 15px;
    border: black;
    padding: 10px 0;
    width: 11rem;
    background-color: #00509D;
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: 750;
    transition: all 0.4s;
    cursor: pointer;
    text-decoration: none;
    margin-left: 20px;
    
    :hover {
        box-shadow: 0px 8px 13px -2px rgba(0,0,0,0.39); 
    }


  }

    a {
    text-decoration: none;
    }


//break points

@media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .trainer-image {
      align-self: center;
      max-width: 350px;
      margin-top: 20px;
      
        }

    bio {
    margin: 0px, 20px, 0px, 20px;
    }


      .mainInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
      }


    h2 {
    text-align: center;
    }

   
    }
    @media only screen and (max-width: 468px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      
  
      .trainer-image {
        align-self: center;
        max-width: 250px;
        
        margin-top: 20px;
      }
      @media only screen and (max-width: 340px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    
        .trainer-image {
          align-self: center;
          max-width: 200px;
          
          margin-top: 20px;
        }
      `;
