import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

function DummyNLP() {
  const handleLogout = () => {};

  const [checked, setChecked] = useState(false);
  var arr = [];
  const handleInputChange = (itemToAdd) => {
    // console.log(event.target.value)

    if (arr.indexOf(itemToAdd.target.value) != -1) {
      arr.splice(arr.indexOf(itemToAdd), 1)
    } else {
      arr.push(itemToAdd.target.value);
    }

    // arr.push(event.target.value);
  };

  const handleInputshow = () => {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    console.log(arr)
    
  };

  return (
    <>
      <Card className="mt-3">
        <Card.Header>Start Redacting</Card.Header>
        <Card.Body>
          <Card.Title>Upload file</Card.Title>
          <Card.Text>
            Please upload file in .docx .pdf or .xlsx format to enable redaction
          </Card.Text>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Upload
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <DropdownButton
            id="dropdown-basic-button"
            title="Choose what to redact"
          >
            <div className="container">
              <div>
                <input
                  name="person"
                  type="checkbox"
                  onChange={handleInputChange}
                  value="PERSON"
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
          </DropdownButton>

          <button type="button" class="btn btn-light mt-3">
            <Link to="/dummyresult">Submit</Link>
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
    </>
  );
}

export default DummyNLP;
