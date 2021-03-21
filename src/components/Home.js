import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Event from "./Event";
import LiveEvent from "./LiveEvent";
import UpcomingEvent from "./UpcomingEvent";
import { Link } from "react-router-dom";
//import Trainer from "./Trainer";

const Home = ({ user }) => {
  console.log(user);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Welcome, {user.name}</h1>

      <Content>
        <Link to="/live">
          <LiveEvent />
        </Link>
        <h1>Browse Workouts</h1>
        <LiveEvents>
          <Event
            img="https://images.unsplash.com/photo-1567598508481-65985588e295?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Dumbell Destroyer"
            time="15 mins - Difficult"
          />
          <Event
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuu_Gkgjc25xC_0Sc-D4wqI2IyyARvLiXvQ&usqp=CAU"
            title="10 Types of Push Ups"
            time="30 mins - Medium"
          />
          <Event
          img="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
          title="Partner Stretching"
          time="45 mins - Easy"
              />
        </LiveEvents>
        <h1>Upcoming Events</h1>
        <LiveEvents>
          <UpcomingEvent
            day="Mar"
            date="20"
            name="20 Minute Bodyweight Workout!"
            time="8:00am - 8:20am"
            image="https://www.popsci.com/resizer/E27KWkS0mUi26C9XASUM56enaSk=/760x506/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7BRTDJOXCIQQH4ZMCBFIUDLEZQ.jpg"
          />
          <UpcomingEvent
            day="Mar"
            date="22"
            name="Pedal to the Metal!"
            time="6:00am - 7:30am"
            image="https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
          <UpcomingEvent
            day="Mar"
            date="24"
            name="Stretch It Out!"
            time="6:30pm - 8:00pm"
            image="https://images.unsplash.com/photo-1522845015757-50bce044e5da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
          <UpcomingEvent
            day="Apr"
            date="3"
            name="Meal Prep Done Easy!"
            time="12:00pm - 1:00pm"
            image="https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-6.jpg"
          />
        </LiveEvents>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-bottom: 5vh;

  * {
    text-decoration: none;
  }

  @media only screen and (max-width: 850px) {
          display: flex;
          flex-direction: column;
          align-items: center;
  }
  `;

const Content = styled.div`
  padding: 0 4%;

  h1 {
    font-weight: 600;
  }

  span {
    font-size: 1.8rem;
  }
  
  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

const LiveEvents = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
 
  }
`;
