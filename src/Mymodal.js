import {Button, Modal} from "react-bootstrap";

function Mymodal(props) {

  const handleClose = () => props.setShowModel(false);

  return (
    <Modal show={props.showModel} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Mymodal
