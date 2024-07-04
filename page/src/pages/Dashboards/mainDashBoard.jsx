import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import NavigationBar from "../../components/NavBar";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "../../assets/images/admin.png";
import Footer from "../../components/Footer/footer";
import "./mainDashBoard.css";

// import { Container, Row, Col, Button, Table } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
  const cardStyle = {
    border: "none",
    borderRadius: "8px",
    color: "#fff", // White text color
    height: "10rem",
    padding: "20px",
    margin: "10px 0 10px 0",
  };

  const cardDryStyle = {
    backgroundColor: "#cccccc", // Gray color
  };

  const cardCustomerStyle = {
    backgroundColor: "#b0b0b0", // Slightly darker gray
  };

  const cardRateStyle = {
    backgroundColor: "#a0a0a0", // Darker gray
  };

  const graphData = {
    labels: ["Kp", "Rp", "Mg", "Ho", "Pp", "Bs", "Ag"],
    datasets: [
      {
        label: "Customer Range",
        data: [50, 35, 42, 78, 25, 80, 65, 48],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(99, 255, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(99, 255, 132, 1)",
        ],
        borderWidth: 5,
      },
    ],
  };

  const graphOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Customer",
        },
      },
      x: {
        title: {
          display: true,
          text: "Root",
        },
      },
    },
    plugins: {
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "lightblue"; // Set your desired background color here
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    },
  };

  return (
    <div>
      <NavigationBar />

      <Container fluid className="dashboard-container">
        {/* <header className="d-flex justify-content-between align-items-center py-3"> */}
        <Row>
          <Col xs={12} md={10} className="mb-4 mb-md-0 text-center">
            <h1 className="my-4 ">
              <b>Welcome to Executive Dashboard</b>
            </h1>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0 ">
            <div className="d-flex align-items-center">
              <Image
                src={Admin}
                alt="Admin"
                style={{
                  width: "80%",
                  height: "80%",
                  // paddingTop: "20px",
                }}
              />
            </div>
          </Col>
        </Row>
        <section className="mt-1">
          {/* <Row> */}
          {/* <Col md={1}></Col>
            <Col md={11}> */}
          <h3>Performance</h3>
          {/* </Col> */}
          {/* </Row> */}
          <Row>
            <Col md={2} className=" justify-content-center mt-5">
              <Card
                style={{ ...cardStyle, ...cardRateStyle, width: "100%" }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Total Dry(Kg) of month</Card.Title>
                  <Card.Text className="card-value">100Kg</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} className=" justify-content-center mt-5">
              <Card
                style={{ ...cardStyle, ...cardRateStyle, width: "100%" }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Total Customer</Card.Title>
                  <Card.Text className="card-value">80</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} className=" justify-content-center mt-5">
              <Card
                style={{ ...cardStyle, ...cardRateStyle, width: "100%" }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Rate</Card.Title>
                  <Card.Text className="card-value">6.5%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xs={12} className="d-flex justify-content-center">
              <div style={{ width: "100%", maxWidth: "900px" }}>
                <Line data={graphData} options={graphOptions} />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
