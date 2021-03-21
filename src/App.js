import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Trainers from "./components/Trainers";
import Book from "./components/Book";
import { auth } from "./firebase";
import { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import LiveRoom from "./components/LiveRoom";
import Profile from "./components/Profile";
import Calendar from "./components/Calendar";
import Workout from "./components/Workout";

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
            <Switch>
              <Route path="/profile">
                <Header user={user} signOut={signOut}  />
                <Profile user={user} />
                <Footer />
              </Route>
              <Route path="/schedule">
                <Header user={user} signOut={signOut} />
                <Calendar />
              </Route>
              <Route path="/trainers">
                <Header user={user} signOut={signOut} />
                <Trainers />
              </Route>
              <Route path="/book">
                <Header user={user} signOut={signOut} />
                <Book />
              </Route>
              <Route path="/live">
                <LiveRoom />
              </Route>
              <Route path="/workout">
                <Header user={user} signOut={signOut} />
                <Workout />
              </Route>
              <Route path="/">
                <Header user={user} signOut={signOut} />
                <Home user={user} />
                <Footer />
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
