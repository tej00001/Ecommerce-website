import React,{ useState } from "react";
import "./App.css";
import { Alert, Container, Navbar } from "react-bootstrap";
import Register from "./Components/Register";

let App = () => {
  const[userList,setUserList]=useState([]);

  const onscreenHandler=(uname,upass,uphone)=>{
    setUserList((prevList)=>{
      return[
        ...prevList, {
          username:uname,password:upass,phonenumber:uphone,id:Math.random().toString()
        },
      ]
    })
   }

  return (
    <>
      <Navbar bg="primary" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Started React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <Alert variant="success">This is a alert—check it out!</Alert>
      <Register onAdd={onscreenHandler}/>
       {
       userList.map((user) => {
        return (
          <li key={user.id}>
            {user.username} ({user.phonenumber})
          </li>
        );
      })
    }
      
    </>
  );
};

export default App;
