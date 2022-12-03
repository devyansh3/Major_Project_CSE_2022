import React, { useEffect, useState } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

function OperatorList() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [userData, setUserData] = useState([]);
  // const db = getFirestore();
  const [elections, setElections] = useState([]);
  const [loader, setloading] = useState(true);
  // const colRef = collection(db, "aadhar-obs");

  const [users, setUsers] = useState([]); // All the users are stored in this state for directory

  async function getusers() {
    const q = query(collection(db, "operators"));
    const snapshot = await getDocs(q);
    let list = [];
    snapshot.forEach((doc) => {
      list.push(doc.data());
    });
    console.log(list);
    setUsers(list);
    // console.log(users);
  }
  useEffect(() => {
    getusers();
    // onSnapshot(q, (querySnapshot) => {
    //   setUsers(querySnapshot.docs.map(doc => ({
    //     id: doc.id,
    //     data: doc.data()
    //   })))
    //   console.log(q)

    // console.log(users)
    // })
  }, []);

  // useEffect(() => {
  //   // Get all the users data
  //   const getData = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'operators'))
  //     querySnapshot.forEach(doc => {
  //       setUsers(users => [...users, doc.data()])
  //     })
  //   }
  //   getData()
  // }, [])

  let electData = [];
  // getDocs(colRef)
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       electData.push({ ...doc.data(), id: doc.id });
  //     });
  //     setElections(electData);
  //     setloading(false);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout();
  //     history.push("/login");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }
  const handleLogout = () => {};
  // useEffect(() => {
  //   console.log(users + "users");
  // }, [])

  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Operator Details</Card.Title>
                <p className="card-category">
                  List of Operators and related info
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <div class="input-group mb-3 px-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="search operator"
                    aria-label="operator's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Slots per hour</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">ASK</th>
                      <th className="border-0">Rating</th>
                      <th className="border-0">Phone No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item) => (
                      <tr>
                        <td>{item.slots_per_hour}</td>
                        <td>
                          <div
                            onClick={() =>
                              history.push({
                                pathname: "/operatorprofile",
                                state: { user: item },
                              })
                            }
                          >
                            {item.name}
                          </div>
                        </td>
                        <td>{item.ask}</td>
                        <td>{item.ratings?.avg}</td>
                        <td>{item.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {elections.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            img={card.img}
            title={card.title}
            description={card.description[0].candidates}
            date="End Date: 5th May"
            route="/club"
          />
        );
      })}
      <div className="w-100 text-center mt-3">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}

export default OperatorList;
