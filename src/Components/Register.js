import React, { useState } from "react";
import { Button, Container, Row, Card, Col, Form } from "react-bootstrap";

const Register = () => {
const[state,setState]=useState({
  count:0
});

const incrementer=()=>{
setState({
  count:state.count+1}
)
}
const decrementer=()=>{
  setState({
    count:state.count+1}
  )
  }
  

  return (
    <>
      <Container>
        <Row>
          <Col xs={5}>
            <Card className="shadow-lg">
                 <Card.Body>
                      <h1>{state.count}</h1>
                 <Button onClick={incrementer} variant="success" className="m-1">Incre</Button>
                 <Button onClick={decrementer} variant="danger" className="m-1">decre</Button>
                 </Card.Body>
                
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
