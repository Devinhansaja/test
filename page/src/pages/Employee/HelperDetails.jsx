import React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import "./EmployeeDetails.css";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const HelperDetails = () => {
  // Dummy data
  const helpers = [
    {
      empNo: 1200,
      name: "Mr.Nihal",
      vehicle: "IF4499",
      route: "Kamburupitiya",
      contact: "0712857347",
      email: "nihal@gmail.com",
    },
    {
      empNo: 1201,
      name: "Mr.Sachintha",
      vehicle: "IF4498",
      route: "Horana",
      contact: "0712851416",
      email: "sachintha@gmail.com",
    },
    {
      empNo: 1202,
      name: "Mr.Kavishka",
      vehicle: "IF4497",
      route: "Rathnapura",
      contact: "0779638565",
      email: "kavishka@gmail.com",
    },
  ];

  return (
    <div>
      <NavigationBar />

      <Container className="employee-details my-4">
        <Row>
          <Col>
            <h2>Helper's Details</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Emp.no</th>
                  <th>Helper Name</th>
                  <th>Vehicle</th>
                  <th>Route</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {helpers.map((helper, index) => (
                  <tr key={index}>
                    <td>{helper.empNo}</td>
                    <td>{helper.name}</td>
                    <td>{helper.vehicle}</td>
                    <td>{helper.route}</td>
                    <td>{helper.contact}</td>
                    <td>{helper.email}</td>
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

export default HelperDetails;
