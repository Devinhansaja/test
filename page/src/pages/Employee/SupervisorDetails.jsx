import React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import "./EmployeeDetails.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const SupervisorDetails = () => {
  // Dummy data
  const supervisor = [
    {
      empNo: 1540,
      name: "Mr.Aslin",
      route: "Kamburupitiya",
      contact: "0712857347",
      email: "aslin@gmail.com",
    },
    {
      empNo: 1541,
      name: "Mr.Devin",
      route: "Rathnapura",
      contact: "07128514169",
      email: "devin@.com",
    },
    {
      empNo: 1542,
      name: "Mr.Amal",
      route: "Monaragala",
      contact: "0779638565",
      email: "amal@gmail.com",
    },
  ];

  return (
    <div>
      <NavigationBar />

      <Container className="employee-details my-2">
        <Row>
          <Col>
            <h2>Supervisor's Details</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Emp.no</th>
                  <th>Supervisor Name</th>
                  <th>Route</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {supervisor.map((supervisor, index) => (
                  <tr key={index}>
                    <td>{supervisor.empNo}</td>
                    <td>{supervisor.name}</td>
                    <td>{supervisor.route}</td>
                    <td>{supervisor.contact}</td>
                    <td>{supervisor.email}</td>
                    <td>
                      <Button variant="success" className="edit-button">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-end">
            <Button variant="success" className="change-arrangement-button">
              Change arrangement
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SupervisorDetails;
