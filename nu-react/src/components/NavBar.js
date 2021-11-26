// NavBar.js
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, logOut } from "../services/authService";

import "./NavBar.css";

function NavBar() {
	const user = isAuthenticated();

	return (
		<Navbar bg="transparent">
			<Container>
				<Navbar.Brand>
					<Link to="/">nuchess</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{(user.role === "ADMIN" || user.role === "USER") && (
							<>
								<Link to="/gallery">Gallery</Link>
							</>
						)}
					</Nav>
					<Nav>
						{user ? (
							<>
								<p>Welcome, {user.name}</p>
								<button onClick={logOut}>Sign out</button>
							</>
						) : (
							<>
								<Link to="/login">Login</Link>
								<Link to="/signup">Sign Up</Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
