import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EstateDetails.css"; // Make sure to create and use an appropriate CSS file
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const EstateDetailsPage = () => {
  const dummyData = [
    {
      LXBNumber: "001",
      stateName: "Diyalape",
      ownerName: "Mr.sunil",
      ownerContact: "0710612604",
      assistantContact: "0712345678",
      helperContact: "0712657347",
      averageTapping: "350L",
      area: "230 area",
      location: "Diyalape,Akurassa",
      root: "kp",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = dummyData.filter((data) =>
    Object.values(data).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <NavigationBar />
      <h2 className="my-4 ">Estate's Details</h2>

      <Container fluid className="vh-100">
        <br />
        <Row className="mb-3">
          <Col className="d-flex flex-wrap align-items-center">
            <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
              <div className="d-flex">
                {["All", "Kp", "Rp", "Mg", "Ho", "Pp", "Bs", "Ag"].map(
                  (filter, index) => (
                    <Button key={index} variant="success" className="mx-3 mb-2">
                      {filter}
                    </Button>
                  )
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={10} className="d-flex justify-content-end">
            <InputGroup
              className="search-bar mb-2"
              style={{ maxWidth: "300px" }}
            >
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={2} className="d-flex justify-content-end">
            <Button
              variant="success"
              className="mb-2"
              style={{ maxWidth: "200px" }}
            >
              New state pending
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>LXB Number</th>
                  <th>State Name</th>
                  <th>Owner Name</th>
                  <th>Owner Contact</th>
                  <th>Assistant Contact</th>
                  <th>Helper Contact</th>
                  <th>Average Tapping</th>
                  <th>Area</th>
                  <th>Location</th>
                  <th>Root</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.LXBNumber}</td>
                    <td>{data.stateName}</td>
                    <td>{data.ownerName}</td>
                    <td>{data.ownerContact}</td>
                    <td>{data.assistantContact}</td>
                    <td>{data.helperContact}</td>
                    <td>{data.averageTapping}</td>
                    <td>{data.area}</td>
                    <td>{data.location}</td>
                    <td>{data.root}</td>
                    <td>
                      <Button variant="success">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default EstateDetailsPage;
