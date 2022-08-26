import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { uuid } from "uuidv4";

function AddNewOperator() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await addDoc(collection(db, 'operators'), {
  //       title: title,
  //       description: description,
  //       completed: false,
  //       created: Timestamp.now()
  //     })
  //     // onClose()
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  const { register } = useAuth();
  const provider = new GoogleAuthProvider();

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

  const addnewoperator = async (e) => {
    e.preventDefault();
    try {
      register(email, password)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => console.log(err));

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

  // useEffect(() => {
  //   console.log(email)
  //   console.log(password)
  //   console.log(ask)
  //   console.log(city)
  //   console.log(pincode)
  //   console.log(name)

  // }, [email,password,city,state,slots,ask,pincode,name])

  return (
    <>
      <Container fluid className="mt-3">
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add new operator</Card.Title>
                <p className="card-category">
                  All fields are mandatory and need to filled
                </p>
              </Card.Header>
              <Card.Body>
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div class="form-group col-md-12">
                      <label for="inputEmail4">Name</label>
                      <input
                        type="name"
                        class="form-control"
                        onChange={(event) => setName(event.target.value)}
                        required
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">
                        Aadhar seva kendra address
                      </label>
                      <input
                        type="name"
                        class="form-control"
                        placeholder="add seva kendra"
                        onChange={(event) => setAsk(event.target.value)}
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">slots per hour</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="add slots"
                        onChange={(event) => setSlots(event.target.value)}
                        required
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label for="inputZip">Pin Code</label>

                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        onChange={(event) => setPincode(event.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputZip">Role</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        onChange={(event) => setRole(event.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">Gender</label>

                      <select
                        id="inputState"
                        class="form-control"
                        onChange={(event) => setGender(event.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Dont want to specify</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputCity"
                        required
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputState">State</label>
                      <select
                        id="inputState"
                        class="form-control"
                        onChange={(event) => setState(event.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option>Jammu & Kashmir</option>
                        <option>Andhra Pradesh</option>
                        <option>Haryana</option>
                        <option>Manipur</option>
                        <option>Sikkim</option>
                        <option>Arunachal Pradesh</option>
                        <option>Himachal Pradesh</option>
                        <option>Meghalaya</option>
                        <option>Tamil Nadu</option>
                        <option>Assam</option>
                        <option>Jharkhand</option>
                        <option>Mizoram</option>
                        <option>Telangana</option>
                        <option>Bihar</option>
                        <option>Karnataka</option>
                        <option>Nagaland</option>
                        <option>Tripura</option>
                        <option>Chattisgarh</option>
                        <option>Kerala</option>
                        <option>Odisha</option>
                        <option>Uttarakhand</option>
                        <option>Goa</option>
                        <option>Punjab</option>
                        <option>Goa</option>
                        <option>Uttar Pradesh</option>
                        <option>Madhya Pradesh</option>
                        <option>Gujrat</option>
                        <option>Maharashtra</option>
                        <option>Rajasthan</option>
                        <option>West Bengal</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex"></div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="age">Age</label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputCity"
                        required
                        onChange={(event) => setAge(event.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="phone">Phone No.</label>
                      <input
                        type="phone"
                        class="form-control"
                        id="inputCity"
                        required
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlFile1">
                          upload profile photo
                        </label>
                        <input
                          type="file"
                          class="form-control-file"
                          id="exampleFormControlFile1"
                          onChange={(event) =>
                            setProfile_img(event.target.value)
                          }
                        />
                      </div>
                    </form>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={addnewoperator}
                  >
                    Add operator
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddNewOperator;
