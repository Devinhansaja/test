import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Logo from "../../assets/images/logo.jpg";
import Seal from "../../assets/images/Seal.png";

const Footer = () => {
  return (
    <footer className="text-dark py-2">
      <div className="container-fluid">
        <Row className="align-items-center">
          <Col xs={12} md={3} className="text-center text-md-left">
            <Image
              src={Logo}
              alt="logo"
              style={{
                width: "30%",
                height: "30%",
              }}
            />
          </Col>
          <Col xs={12} md={3} className="text-center">
            <h6 className="mb-2">
              <b>Contact Us</b>
            </h6>
            <address className="mb-2">
              No.95B, Zone A, EPZ,
              <br />
              Biyagama, 11672,
              <br />
              Sri Lanka.
            </address>
          </Col>

          <Col xs={12} md={3} className="text-center">
            <br />
            Tel: <a href="tel:+94114311200">+94 114 311 200</a>
            <br />
            Fax: <a href="fax:+94114311222">+94 114 311 222</a>
            <br />
            Email: <a href="mailto:info@lalangroup.com">info@lalangroup.com</a>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-right">
            <Image
              src={Seal}
              alt="Seal"
              style={{
                width: "40%",
                height: "30%",
              }}
            />
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
