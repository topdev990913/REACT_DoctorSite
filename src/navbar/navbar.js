import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logoURL from "../images/medical-logo.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./CommonStyles.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import logoURL from "../public/img/logo.png"
// import flagURL from "../public/img/flag.png"

import Stack from "react-bootstrap/Stack";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>;

function Header() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        style={{ boxShadow: "0 4px 20px 0 rgba(0.4,0.5,0.8,0.1)", opacity: 0.9 }}
      >
        <Container fluid>
          <Stack
            direction="horizontal"
            gap={3}
            sticky="top"
            style={{
              width: "100%",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <h1 className="companyname">flydocfl</h1>
            </div>
            <div className="ms-auto" style={{ marginRight: 100 }}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/">
                    {" "}
                    <h5 className="btn"> Home </h5>{" "}
                  </NavLink>
                  <NavLink to="#">
                    {" "}
                    <h5
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "https://www.patientfusion.com/external/appointment/8f74b4b3-7439-4b0a-867e-a64e7cc284d4?origin=doctor";
                      }}
                    >
                      {" "}
                      Schedule Appoinment{" "}
                    </h5>{" "}
                  </NavLink>
                  <NavLink to="#">
                    {" "}
                    <h5
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "https://collectcheckout.com/r/8grfc";
                      }}
                    >
                      {" "}
                      Payment{" "}
                    </h5>{" "}
                  </NavLink>
                  <Navbar.Brand to = "/"> <img src = {logoURL} alt = "flydocfl1" className="iconinsert"/> </Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
