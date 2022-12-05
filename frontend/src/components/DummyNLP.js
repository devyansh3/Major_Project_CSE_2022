import React from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

function DummyNLP() {
  const handleLogout = () => {};

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
            <div className="d-flex ">
            <input className="py-2" type="checkbox" id="formFile" />
            <p>person</p>
            </div>

            <div className="d-flex ">
            <input className="py-2" type="checkbox" id="formFile" />
            <p>organisation</p>
            </div>

            <div className="d-flex ">
            <input className="py-2" type="checkbox" id="formFile" />
            <p>cardinal</p>
            </div>

            <div className="d-flex ">
            <input className="py-2" type="checkbox" id="formFile" />
            <p>location</p>
            </div>
            </div>
            
            
           
          </DropdownButton>

          <button type="button" class="btn btn-light mt-3">
            <Link to="/dummyresult">Submit</Link>
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default DummyNLP;
