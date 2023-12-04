import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Link to="/">DER GLÜHENDE COLT</Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/member">
            Member
          </Nav.Link>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
};
export default Layout;
