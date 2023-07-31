import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

function Mymodal2() {

  const [showModel, setShowModel] = useState(true);
  const handleClose = () => setShowModel(false);

  return (
    <Modal show={showModel} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Mymodal2
