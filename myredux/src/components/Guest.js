import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Register from "./Register";

const Guest = () => {
  //const { serverMessage } = useSelector((state) => state.loginSlice);
  return (
    <Container className="my-5 w-100">
    <Row>
      {/* <Col sm={6}> */}
        <h1>Welcome to Volleyball Scoreboard </h1>
        <p>This is an application that can help the team and the referee to track the scores of two playing teams and also record the final scores of all the participating teams in the tournament</p>
      {/* </Col> */}
      {/* <Col className="p-0" sm={6}> */}
        <Register />
      {/* </Col> */}
    </Row>
  </Container>
)}



export default Guest;