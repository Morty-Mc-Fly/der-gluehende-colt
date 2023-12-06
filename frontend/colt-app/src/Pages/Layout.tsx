import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import "../SCSS/Layout.scss";

const Layout = () => {
  return (
    <>
      <Navbar>
        <Stack direction="horizontal" gap={2}>
          <Navbar.Brand>
            <Link to="/">DER GLÜHENDE COLT</Link>
          </Navbar.Brand>
          <Nav ms-auto>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/member">
              Member
            </Nav.Link>
            <Nav.Link as={Link} to="/attendance">
              Attendance
            </Nav.Link>
          </Nav>
        </Stack>
      </Navbar>
      <Outlet />
    </>
  );
};
export default Layout;
