import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import candidates from "../pages/candidates";
import Analytics from "./Analytics";
import "./App.css";
import DummyNLP from "./DummyNLP";
import DummyResult from "./DummyResult";
import ForgotPassword from "./ForgotPassword";
import List from "./List";
import Login from "./Login";
import Mechanical from "./Mechanical";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "100vw" }}>
          <Router>
            <NavBar />
            <Switch>
              {/* <PrivateRoute exact path='/' component={OperatorList} /> */}
              <PrivateRoute exact path="/" component={DummyNLP} />

              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/Navbar" component={Navbar} />
              <Route path="/candidates" component={candidates} />
              <Route path="/list" component={List} />
              <Route path="/mechanical" component={Mechanical} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/maps" component={Map} />
              <Route path="/dummyresult" component={DummyResult} />
            </Switch>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
