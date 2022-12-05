import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import "./nlp.css";

var arr = [];
var stats = {};
var redacted_text = "";

function DummyNLP() {
  const handleLogout = () => {};

  const [checked, setChecked] = useState(false);
  const [finalDispay, setFinalDisplay] = useState("");



  const handleInputChange = (itemToAdd) => {
    // console.log(event.target.value)

    if (arr.indexOf(itemToAdd.target.value) != -1) {
      arr.splice(arr.indexOf(itemToAdd), 1);
    } else {
      arr.push(itemToAdd.target.value);
    }

    // arr.push(event.target.value);
  };

  const handleInputshow = () => {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    console.log(arr);
  };

  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onChangeHandler2 = (event) => {
    // arr.push(inputValue)
    arr[1] = inputValue;
    console.log(arr);
  };

  const mystyle = {
    marginTop: "100px",
    width: "100%",
    height: "100%",
  };

  const [showResults, setShowResults] = useState(false);
  const [checkboxStyle, setCheckboxStyle] = useState(false);

  const onClickSearch = (itemToAdd) => {
    if (itemToAdd.target.value == "SEARCH") {
      arr.splice(0, arr.length);
    }
    arr.push(itemToAdd.target.value);

    console.log(arr);

    setShowResults(!showResults);
    setCheckboxStyle("searchStyle2");
    setCheckboxStyle((current) => !current);
  };

  async function handleSubmit() {
    fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: "/Users/sompande/Documents/KPMG_SomPande/Bonafide.pdf",
        categories: arr,
      }),
    }).then((res) =>
      res.json().then((data) => {
        stats = data["red_metrics"];
        redacted_text = data["redacted"];

        console.log(stats);
        console.log(redacted_text);
    alert(redacted_text)


        // console.log(data["redacted"]);
      })
    );

  }

  useEffect(()=> {
    setFinalDisplay(redacted_text)


  },[]) 
  return (
    <>
      <div style={mystyle}>
        <Card className="mt-3">
          <Card.Header>Start Redacting</Card.Header>
          <Card.Body>
            <div className="d-flex">
              <div>
                <p>
                  <label for="w3review">
                    Start typing to begin redaction process
                  </label>
                </p>
                <textarea
                  style={{
                    width: "1050px",
                    height: "150px",
                    padding: "12px 20px",
                    border: "2px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#f8f8f8",
                    fontSize: "16px",
                  }}
                  id="inputText"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="start typing"
                >
               
                </textarea>
              </div>
              
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>

            <div className="d-flex">
              <div>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Choose what to redact"
                >
                  <div className="container">
                    <div className={checkboxStyle}>
                      <div>
                        <input
                          name="person"
                          type="checkbox"
                          onChange={handleInputChange}
                          value="PERSON"
                          className={checkboxStyle}
                        />
                        <label htmlFor="checked">Person</label>
                      </div>

                      <div>
                        <input
                          name="org"
                          type="checkbox"
                          onChange={handleInputChange}
                          value="ORG"
                        />
                        <label htmlFor="checked">Organisation</label>
                      </div>

                      <div>
                        <input
                          name="cardinal"
                          type="checkbox"
                          onChange={handleInputChange}
                          value="CARDINAL"
                        />
                        <label htmlFor="checked">Cardinal</label>
                      </div>

                      <div>
                        <input
                          name="location"
                          type="checkbox"
                          onChange={handleInputChange}
                          value="GPE"
                        />
                        <label htmlFor="checked">Location</label>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <input
                      name="org"
                      type="checkbox"
                      onChange={onClickSearch}
                      value="SEARCH"
                    />
                    <label htmlFor="checked">Search</label>
                  </div>
                </DropdownButton>
              </div>

              <div>
                {showResults ? (
                  <div class="input-group mb-3 ml-2">
                    <input
                      type="text"
                      name="name"
                      onChange={onChangeHandler}
                      value={inputValue}
                      class="form-control"
                      placeholder="Search for an entity"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button
                        class="input-group-text"
                        onClick={onChangeHandler2}
                        id="basic-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <button
              type="button"
              class="btn btn-light mt-3"
              onClick={handleSubmit}
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleInputshow}
              class="btn btn-dark mt-3"
            >
              Add redaction
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default DummyNLP;
