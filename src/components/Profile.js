import React from "react";
import styled from "styled-components";
import Event from "./Event";
import Trainer from "./Trainer";

const Profile = ({ user }) => {
  return (
    <Container>
      <Main>
        <div className="info">
          <img
            src={
              !user.profileImage
                ? "https://i.pinimg.com/originals/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"
                : user.profileImage
            }
          />
          <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Teams: Accenture, The 4 Musketeers, Football Squad</p>
          </div>
        </div>

        <h1>Your Upcoming Events</h1>
        <div className="upcoming-events">
          <Event
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuu_Gkgjc25xC_0Sc-D4wqI2IyyARvLiXvQ&usqp=CAU"
            title="Push ups with Rick"
            time="2:30pm - 3:00pm"
          />
          <Event
            img="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Daily Stretch"
            time="Monday 12:00pm - 12:45pm"
          />
          <Event
            img="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Best+Apps+and+Websites/home+workout-carousel.jpg"
            title="Energize Your Day!"
            time="Monday 8:00am - 9:00am"
          />
        </div>
        <h1>Your Trainers</h1>
        <div className="upcoming-events">
          <Trainer
            name="Bobby Flay"
            image="https://images.pexels.com/photos/5327466/pexels-photo-5327466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Trainer
            name="Peter Griffin"
            image="https://www.witseducation.com/fit/wp-content/uploads/2014/12/lifestyle-wellness-coaching-trainer.jpg"
          />
          <Trainer
            name="Caroline Jones"
            image="https://storage.googleapis.com/setmore-website/v2/images/industry-pages/personal-trainer/personal-trainer-woman.png"
          />
          <Trainer
            name="+Trainer"
            image="https://cdn.sandbergwallpaper.com/wp-content/uploads/2020/11/237-21_1.jpg"
          />
        </div>
      </Main>
    </Container>
  );
};

export default Profile;

const Main = styled.div`
  padding: 20px 18px;
  margin-bottom: 10vh;
  a {
    text-decoration: none !important;
  }

  .info {
    display: flex;
    align-items: center;

    img {
      border-radius: 100%;
      margin-right: 15px;
    }

    div {
      h1,
      p {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .upcoming-events {
    display: flex;
    overflow: auto;
    white-space: nowrap;

    @media only screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Container = styled.div``;
