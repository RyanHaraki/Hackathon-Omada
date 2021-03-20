import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ user, signOut }) => {
  return (
    <Container>
      <header>
        <h1>Omada</h1>
        <left>
          <Link to="#">
            <p>Schedule</p>
          </Link>
          <Link to="#">
            <p>Trainers</p>
          </Link>
          <img
            onClick={signOut}
            src={
              !user.profileImage
                ? "https://i.pinimg.com/originals/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"
                : user.profileImage
            }
          />
        </left>
      </header>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  header {
    background: #00296b;
    color: white;
    width: 100%;
    height: 55px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-left: 20px;
    font-size: 2rem;
    font-weight: 500;
  }

  left {
    display: flex;
    align-items: center;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    padding: 0 20px;
    cursor: pointer;
  }

  a {
    margin: 5px;
    margin: 10px;
    color: #ffffff;
    border-radius: 10px;
    text-decoration: none;
  }
`;
