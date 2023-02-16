import React, { useState } from "react";
import { Button, Container, Row, Card, Col, Form } from "react-bootstrap";

const Register = () => {
  const [userList,setUserList] = useState({
    user:{
    username:"",
    password:"",
    phonenumber:""
    }
  })

  const updateDetails=(event)=>{
    setUserList( {
      ...userList,
      user:{
        ...userList.user,
        [event.target.name]:event.target.value
      }
    })
  }

  const submit=(event)=>{
    event.preventDefault();
  }

  const register=(event)=>{
    event.preventDefault();
    console.log(userList.user)
  }

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
                    name="username"
                      onChange={updateDetails}
                      type="text"
                      placeholder="Username"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> Password</Form.Label>
                    <Form.Control
                    name="password"
                      onChange={updateDetails}
                      type="text"
                      placeholder="password"
                    ></Form.Control>
                    <Form.Text type="text">
                      Must contain atleast one numeric and Capital letter
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label> phonenumber</Form.Label>
                    <Form.Control
                    name="phonenumber"
                      onChange={updateDetails}
                      type="number"
                      placeholder="phonenumber"
                    ></Form.Control>
                  </Form.Group>
                  <Button onClick={register} type="submit">Confirm</Button>
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
