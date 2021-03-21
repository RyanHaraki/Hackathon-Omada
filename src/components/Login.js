import React from "react";
import styled from "styled-components";
import LoginCard from "./LoginCard";
import { auth, provider } from "../firebase";

const Login = (props) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          profileImage: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
        // addUser(newUser.name, newUser.email, newUser.profileImage)
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <LoginPrompt>
        <h1>Omada</h1>
        <img src="https://i.ibb.co/nz5rMSG/YES.png" alt="YES" border="0" />
        <p>Stay active from home.</p>

        <LoginButton onClick={signIn}>Login with Google</LoginButton>
      </LoginPrompt>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background: #00509d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginPrompt = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 3px 7px 2px rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 15px 0;
  }
  button {
    margin-bottom: 8px;
  }
`;

const LoginButton = styled.button`
  padding: 13px 12px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  background: #ffd500;
  color: white;
  font-size: 1.1rem;
  color: black;
  :hover {
    background: #fdc500;
  }
`;
