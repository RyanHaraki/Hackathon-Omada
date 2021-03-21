import React from "react";
import styled from "styled-components";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  return (
    <Container>
      <h1> Trainers </h1>

      <Cards className="center">
        <TrainerCard
          title="Amanda"
          image="https://media.self.com/photos/58b6db6b3adc2066deea4527/master/pass/tamara-pridgett-insta.jpg"
          bio="Amanda is one of our first trainers to commit to our cause. She is determined to help all users achieve thier fitness goals. Amanda is best know for her motivational speeches, helping all to push themselves to the next level they did not know they had. Amanda has been apart of our orginization since early 2020 and loves the socialbility of the job."
        />
        <TrainerCard
          title="Tyrone"
          image="https://miro.medium.com/max/700/1*DcXbEjyiKj3OseCrg9ftNw.jpeg"
          bio="Tyrone is known for his tough nature. While working here, Tyrone has been a majority of an upper body coach, using dumbells and body weight to push indaviduals and teams alike to gain muscle in their arms. Since starting here in the last 3 months, Tyrone has also achived his own fitness goals because of his work within our company."
        />
        <TrainerCard
          title="Walton"
          image="https://image.freepik.com/free-photo/guy-working-out-gym_102671-6706.jpg"
          bio="Orginally born in Ireland, Walton comes from a royal line. Fun fact, Walton is 457th in line to the Engilsh throne. However, Walton currently resides in our kingdom where he is our leg trainer. He ensures he can use bodyweight to gain leg muscle mass. Walton is considered to be the most fun of all the trainers, using games while exercising."
        />
      </Cards>
    </Container>
  );
};

export default Trainers;

const Container = styled.div`
  h1 {
    color: black;

    margin-left: 60px;
    font-size: 3rem;
    font-weight: 600;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Cards = styled.div`
  justify-content: space-between;


  @media only screen and (max-width: 600px) {
   
    
    .trainer-image {
      width: 350px;
      height: 250px
    }

    h2 {
      font-size: 2rem;
      margin: 0px 20px;
    }

    .mainInfo {
      margin-top: 25px;
    }
  }
`;
