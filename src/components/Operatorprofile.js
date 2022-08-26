import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";
import {Link, useLocation} from 'react-router-dom'
import Review from "./Review";


function OperatorProfile() {
  const location = useLocation();
  const user = location.state?.user;

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

                     <Button
                        className="pull-right mt-2"
                    
                        type="submit"
                        variant="light"
                      >
                        <Link to='#'> Update operator details</Link>
                       
                      </Button>

                      <Button
                        className="pull-right mt-2 ml-3"
                    
                        type="submit"
                        variant="light"
                      >
                        <Link to='/'> Back to operator list</Link>
                       
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
                          style={{width:'400px', height:'250px'}}
                          src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
                        ></img>
                        <h5 className="title">Devyansh Sehgal</h5>
                      </a>
              
                    </div>
                    <p className="description text-center">
                      Devyansh Sehgal is an active aadhar operator <br></br>working 6 days a week
               
                  
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

export default OperatorProfile

