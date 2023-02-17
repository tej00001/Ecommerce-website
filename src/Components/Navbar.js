import { Container, Navbar } from "react-bootstrap";
import classes from "./Navbar.module.css";


const NavbarList = () => {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand>
            <h1>The Generics</h1>
          </Navbar.Brand>
        </Container>

        <Container className={classes.size}>
          <Navbar.Brand href="youtube">
            <img
              src="https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg"
              alt="youtube"
            />
          </Navbar.Brand>
          <Navbar.Brand href="spootify">
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Icon-png-rgb-black.png"
              alt="spotify"
            />
          </Navbar.Brand>
          <Navbar.Brand href="fb">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/13/07/41/icons-842893__340.png"
              alt="fb"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarList;
