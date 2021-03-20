import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Event from "./Event";
//import Trainer from "./Trainer";

const Home = ({ user }) => {
 
  console.log(user)

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Welcome, {user.name}</h1>

      <Content>
        <h1>
          Live<span>🔴</span>
        </h1>
        <LiveEvents>
          <Event
            img="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Private Session with Geralt"
            time="6:30pm  - 7:30pm"
          />
          <Event
            img="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80"
            title="Team Yoga with Genea"
            time="6:30pm  - 7:30pm"
          />
        </LiveEvents>
        <h1>Recommended Exercises</h1>
        <LiveEvents>
          <Event
            img="https://images.unsplash.com/photo-1567598508481-65985588e295?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Squats (Dumbells)"
            time="15 mins - Difficult"
          />
          <Event
            img="https://images.unsplash.com/photo-1566351505392-bb6c6e0c9823?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            title="Diamond Push Ups"
            time="10 mins - Medium"
          />
        </LiveEvents>

        <CalendarSection>
          <h1>
          Your Scheddule
          </h1>
        </CalendarSection>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Content = styled.div`
  padding: 0 4%;

  h1 {
    font-weight: 500;
  }

  span {
    font-size: 1.8rem;
  }
`;

const LiveEvents = styled.div`
  display: flex;
`;

const CalendarSection = styled.div`
  text-align: center;
`;
