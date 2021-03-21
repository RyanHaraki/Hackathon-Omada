import React from "react";
import styled from "styled-components";

const WorkoutCard = ({titleW, video, description, time}) => {
  return (
    <Container>
      <iframe src={video}></iframe>
      <CenterInfo>
        <h2>{titleW}</h2>
        <p>
          {description}
        </p>
        <h6>{time}</h6>
      </CenterInfo>

      
    </Container>
  );
};
export default WorkoutCard;

const CenterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  color: black;
  width: 80%;
  border: 3px #9b9b9b solid;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
  align-self: center;
  justify-content: space-between;

  h6 {
    color: #9b9b9b;
    font-size: 1rem;
    margin-left: 20px;
  }
  h2{
margin-left: 20px;
  }
  iframe {
    border-radius: 28px;
    height: 250px;
    width: 900px;
    margin: 20px 20px 20px 20px;
  }
  p {
    margin: 20px 20px 20px 20px;
  }
`;
