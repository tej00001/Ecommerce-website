import React, { useState } from "react";
import { Button, Container, Row, Card, Col, Form } from "react-bootstrap";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const UserHandler = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const phonenumberHandler = (event) => {
    setPhonenumber(event.target.value);
    console.log(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();

    props.onAdd(username, password, phonenumber);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={5}>
            <Card className="shadow-lg">
              <Card.Header style={{ backgroundColor: "lightgreen" }}>
                <h1>Registration Form</h1>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={submit}>
                  <Form.Group className="mb-3">
                    <Form.Label> Username</Form.Label>
                    <Form.Control
                      onChange={UserHandler}
                      type="text"
                      placeholder="Username"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> Password</Form.Label>
                    <Form.Control
                      onChange={passwordHandler}
                      type="text"
                      placeholder="passwaord"
                    ></Form.Control>
                    <Form.Text type="text">
                      Must contain atleast one numeric and Capital letter
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> phonenumber</Form.Label>
                    <Form.Control
                      onChange={phonenumberHandler}
                      type="number"
                      placeholder="phonenumber"
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit">Confirm</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
