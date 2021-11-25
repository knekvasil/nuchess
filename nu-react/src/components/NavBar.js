// NavBar.js
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<Navbar bg="transparent">
			<Container>
				<Navbar.Brand href="#home">nuchess</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Gallery</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Sign up</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
