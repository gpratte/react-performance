import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import Home from "./Home";
import Home2 from "./Home2";
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/home">
            <Button variant="outline-secondary"> Home </Button>
          </Link>
          <Link to="/home2">
            <Button variant="outline-secondary"> Home2 </Button>
          </Link>
          <br/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/home2' element={<Home2/>}/>
        </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
