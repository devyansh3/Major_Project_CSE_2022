import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DummyNLP() {
  const handleLogout = () => {};

  return (
    <>
    <Card className='mt-3'>
    <Card.Header>Start Redacting</Card.Header>
    <Card.Body>
      <Card.Title>Upload file</Card.Title>
      <Card.Text>
      Please upload file in .docx .pdf or .xlsx format to enable redaction
      </Card.Text>
      <div class="mb-3">
  <label for="formFile" class="form-label">Upload</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
<DropdownButton id="dropdown-basic-button" title="Choose what to redact">
      <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Credit/Debit Card no</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Phone Numbers</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Emails</Dropdown.Item>

    </DropdownButton>
    
<button type="button" class="btn btn-light mt-3">
<Link to="/dummyresult">Submit</Link>
</button>

    </Card.Body>
  </Card>
  
 </>
  )
}

export default DummyNLP