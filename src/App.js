import React from "react";
import { Container, Button } from "react-bootstrap";
import Register from "./Components/Register";
import NavbarList from "./Components/Navbar";
import ProductList from "./Components/ProductList";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const App = () => {
  const ProductsDetails = productsArr.map((item) => (
    <ProductList
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));

  return (
    <>
      <Register />
      <span>{ProductsDetails}</span>
      <Container className="justify-content-left me-4">
        <Button className="btn-dark btn-outline-warning">See the Cart</Button>
      </Container>
      <NavbarList />
    </>
  );
};

export default App;
