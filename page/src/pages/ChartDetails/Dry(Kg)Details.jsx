import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "chart.js/auto";
import NavigationBar from "../../components/NavBar";
import Footer from "../../components/Footer/footer";

const dummyData = [
  {
    LXBNumber: "001",
    StateName: "Diyalape",
    Root: "Kp",
    DryKg: "100Kg",
    VFA: "0.037",
    NH3: "0.27",
  },
  // Add more dummy data as needed
];

const DryKgDetails = () => {
  const [startDate, setStartDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const graphData = {
    labels: ["Kp", "Rp", "Mg", "Ho", "Pp", "Bs", "Ag"],
    datasets: [
      {
        label: "Dry (Kg)",
        data: [1.0,2.0,0.4,0.8,1.2,1.6,0.5],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const graphOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Dry(Kg)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Root",
        },
      },
    },
  };
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
      <h2 className="my-4 ">Dry(Kg) Details</h2>
      <Container fluid>
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
        <Row className="my-3">
          <Col md={11} className="d-flex justify-content-end">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="mm/dd/yyyy"
              className="form-control"
            />
          </Col>
          <Col md={1} className="d-flex justify-content-end">
            <Button variant="secondary">Search</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="d-flex justify-content-center">
            <div style={{ width: "100%", maxWidth: "900px" }}>
              <Bar data={graphData} options={graphOptions} />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={12} className="d-flex justify-content-end">
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
        </Row>
        <Row className="my-3">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>LXB Number</th>
                  <th>State Name</th>
                  <th>Root</th>
                  <th>Dry(kg)</th>
                  <th>VFA</th>
                  <th>NH3</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.LXBNumber}</td>
                    <td>{data.StateName}</td>
                    <td>{data.Root}</td>
                    <td>{data.DryKg}</td>
                    <td>{data.VFA}</td>
                    <td>{data.NH3}</td>
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

export default DryKgDetails;