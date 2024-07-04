import React from 'react';
import TopicBox from '../../components/SupervisiorNav/TopicBox';
import Back from "../../assets/images/back.jpg";

const Home = () => {
  return (
    <div>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        body {
          min-height: 100vh;
          background: url(${Back}) no-repeat center center/cover;
          font-size: 20px;
          font-weight: bold;
          font-style: italic;
        }
        .gif {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 150px; /* Adjust the size as needed */
          height: auto;
        }
        `}
      </style>
      
      <TopicBox />
      
      {/* Add your home page content here */}
      <div style={{ marginTop: '70px', padding: '20px' }}>
        <h1>Welcome to the Supervisior </h1>
        <p>"Empowering industries with robust and flexible solutions."</p>
      </div>

     
    </div>
  );
};

export default Home;
