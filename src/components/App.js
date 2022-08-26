import React from "react";
import Signup from "./Signup";
import { Container, Navbar } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import NavBar from "./NavBar";
import "./App.css";
import Reports from "../pages/Reports";
import LiveChat from "../pages/LiveChat";
import candidates from "../pages/candidates";
import List from "./List";
import Mechanical from "./Mechanical";
import Club from "./Club";
import Result from "./Result";
import OperatorList from "./OperatorList";
import AddNewOperator from "./AddNewOperator";
import OperatorProfile from "./Operatorprofile";
import Analytics from "./Analytics";

function App() {
  return (
    <>
      <Container className='d-flex align-items-center justify-content-center'>
        <div className='w-100' style={{ maxWidth: "100vw" }}>
          <Router>
            <NavBar />
              <Switch>
                <PrivateRoute exact path='/' component={OperatorList} />
                <PrivateRoute
                  path='/update-profile'
                  component={UpdateProfile}
                />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/Navbar' component={Navbar} />
                <Route path='/reports' component={Reports} />
                <Route path='/chat' component={LiveChat} />
                <Route path='/candidates' component={candidates} />
                <Route path='/list' component={List} />
                <Route path='/mechanical' component={Mechanical} />
                <Route path='/club' component={Club} />
                <Route path='/result' component={Result} />
                <Route path='/operatorlist' component={OperatorList} />
                <Route path='/addoperator' component={AddNewOperator} />
                <Route path='/operatorprofile' component={OperatorProfile} />
                <Route path='/analytics' component={Analytics} />

              </Switch>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
