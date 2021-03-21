import React from "react";
import styled from "styled-components";
import TrainerCard from "./TrainerCard";


const Trainers = () => {
  return (
    <Container>
      <h1> Trainers </h1>

      <Cards className="center">
        <TrainerCard 
        title="Shaniqua"
        image="https://media.self.com/photos/58b6db6b3adc2066deea4527/master/pass/tamara-pridgett-insta.jpg"
        bio="dafaf s das fgdaf as dsa gfa sd sf as fdas f asd as f asd as fas d as fsa fas f dgd hrs g sdg sr gs dg d gse gsd  gesw g sd ge g sdg es g sd gsewr gs  gsr g rdgseg sr gs eg ser g rth ft h er dg rs h t hr sgsrd  iojb biuvyi giyg iugiug uiuigip vuf uyvu vu v guv vi viv ivi g ig yuf uyyf u fyup fyf yfy fyufyu yufuy"
        />
        <TrainerCard 
        title="Tyrone"
        image="https://miro.medium.com/max/700/1*DcXbEjyiKj3OseCrg9ftNw.jpeg"
        bio="dafaf s das fgdaf as dsa gfa sd sf as fdas f asd as f asd as fas d as fsa fas f dgd hrs g sdg sr gs dg d gse gsd  gesw g sd ge g sdg es g sd gsewr gs  gsr g rdgseg sr gs eg ser g rth ft h er dg rs h t hr sgsrd  iojb biuvyi giyg iugiug uiuigip vuf uyvu vu v guv vi viv ivi g ig yuf uyyf u fyup fyf yfy fyufyu yufuy"
        />
        <TrainerCard 
        title="Walton"
        image="https://image.freepik.com/free-photo/guy-working-out-gym_102671-6706.jpg"
        bio="dafaf s das fgdaf as dsa gfa sd sf as fdas f asd as f asd as fas d as fsa fas f dgd hrs g sdg sr gs dg d gse gsd  gesw g sd ge g sdg es g sd gsewr gs  gsr g rdgseg sr gs eg ser g rth ft h er dg rs h t hr sgsrd  iojb biuvyi giyg iugiug uiuigip vuf uyvu vu v guv vi viv ivi g ig yuf uyyf u fyup fyf yfy fyufyu yufuy"
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
  justifycontent: spxace-between;

  @media only screen and (max-width: 850px){
      
    .trainer-image {
        
        height: 170px;
                
      }

      h2 {
        
        font-size: 2rem;
        margin: 0px 20px;
      }

      .mainInfo {
          margin-top: 25px;
      }
  }
  @media only screen and (max-width: 600px){
    flex-direction: collum;
    .trainer-image {
        
        height: 125px;
        width: 1000px;
       
                
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
