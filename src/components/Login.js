import React from "react";
import styled from "styled-components";
import LoginCard from "./LoginCard";
import { auth, provider } from "../firebase";

const Login = (props) => {
 
     const signIn = () => {
      auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          profileImage: result.user.picture,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
        // addUser(newUser.name, newUser.email, newUser.profileImage)
      })
      .catch((err) => alert(err.message));
     };

    return (
      <Container>
        <div className="header">
          <h1>Omada</h1>
        </div>

        <CardArea>
          <LoginCard title="Personal" signIn={signIn}  />
          <LoginCard title="Teams" signIn={signIn}/>
        </CardArea>
      </Container>
    );
  };


export default Login;

const Container = styled.div`
  background: #00296b;
  height: 100vh;
  padding: 2% 10%;

  .header {
    color: white;
    text-align: center;

    h1 {
      margin: 0;
      font-size: 4rem;
      font-weight: 500;
    }
  }
`;

const CardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15%;
`;
