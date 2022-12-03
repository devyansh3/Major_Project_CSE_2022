// react-bootstrap components
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Review from "./Review";

import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
// react-bootstrap components

import { uuid } from "uuidv4";

function OperatorProfile() {
  const location = useLocation();
  const user = location.state?.user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ask, setAsk] = useState("");
  const [slots, setSlots] = useState(4);
  const [pincode, setPincode] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [profile_img, setProfile_img] = useState("");
  const [avg, setAvg] = useState(5);
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState(5);
  const [age, setAge] = useState("");
  const [is_dark, setIs_dark] = useState(false);
  const [phone, setPhone] = useState("");

  const updateoperator = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "operators"), {
        address: {
          address_line: ask,
          city: city,
          state: state,
        },
        age: age,
        ask: ask,
        email: email,
        gender: gender,
        is_dark: is_dark,
        name: name,
        phone: phone,
        profile_img: profile_img,
        ratings: {
          avg: avg,
          count: count,
          sum: sum,
        },
        role: role,
        slots_per_hour: slots,
        uid: uuid(),
      });
      // onClose()
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Operator Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  {console.log(user)}
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          defaultValue={user?.name}
                          placeholder="Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Age</label>
                        <Form.Control
                          defaultValue={user?.age}
                          placeholder="age"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          defaultValue={user?.email}
                          placeholder="Email"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Phone</label>
                        <Form.Control
                          defaultValue={user?.phone}
                          placeholder="Phone Number"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Gender</label>
                        <Form.Control
                          defaultValue={user?.gender}
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>role</label>
                        <Form.Control
                          defaultValue="aadhar operator"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Area pincode</label>
                        <Form.Control
                          defaultValue="143001"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>total slots in month</label>
                        <Form.Control
                          defaultValue="25"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={updateoperator}
                    >
                      Update operator Details
                    </button>

                    <Button
                      className="pull-right mt-2 ml-3"
                      type="submit"
                      variant="light"
                    >
                      <Link to="/"> Back to operator list</Link>
                    </Button>
                  </div>

                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      style={{ width: "400px", height: "250px" }}
                      src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                    ></img>
                    <h5 className="title">{user?.name}</h5>
                  </a>
                </div>
                <p className="description text-center">
                  {user?.name} is an active aadhar operator <br></br>working 6
                  days a week
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        <Review />
      </Container>
    </>
  );
}

export default OperatorProfile;
