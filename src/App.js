import React, { useState } from 'react';
import './App.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {setShow(true)};
  const handleClose = () => {setShow(false)};

  return (
    <div className="App">
      <h1 className="title">GALLERIAFY</h1>
      <p className="title">
        Add images to your wall
      </p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add image</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <IconButton onClick={handleShow}>
        <AddCircleIcon className="add"/>
      </IconButton>
    </div>
  );
}

export default App;
