// NavBar.js
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, logOut } from "../services/authService";

import "./NavBar.css";

function NavBar() {
	const user = isAuthenticated();
	const userIcon = <i className="bi bi-person-fill"></i>;
	return (
		<Navbar bg="transparent">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="Logo">
						nuchess
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>

					<Nav>
						{user ? (
							<>
								<NavDropdown
									align="end"
									title={userIcon}
									id="basic-nav-dropdown-left"
								>
									<NavDropdown.Item>
										<Link to="/gallery" className="Dropdown">
											Gallery
										</Link>
									</NavDropdown.Item>

									<NavDropdown.Item>
										<Link to="/addPost" className="Dropdown">
											New Post
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item>
										<button onClick={logOut} className="Dropdown logoutButton">
											Sign out
										</button>
									</NavDropdown.Item>
								</NavDropdown>
							</>
						) : (
							<>
								<NavDropdown
									align="end"
									title={userIcon}
									id="basic-nav-dropdown-left"
								>
									<NavDropdown.Item>
										<Link to="/login" className="Dropdown">
											Login
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<Link to="/signup" className="Dropdown">
											Sign Up
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
