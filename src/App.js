import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Trainers from "./components/Trainers";
import { auth } from "./firebase";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };


  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Switch>
              <Route path="/">
                <Home user={user}/>
              </Route>
            </Switch>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div``;
