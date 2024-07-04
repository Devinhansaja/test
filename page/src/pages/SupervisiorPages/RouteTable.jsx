import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RouteTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/data')
      .then(response => {
        setRoutes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRoutes = routes.filter(route =>
    route.lxb_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="route-table">
      <style>
        {`
        body {
          font-family: Arial, sans-serif;
          margin-top: 100px;
        }

        .App {
          text-align: center;
        }

        .route-table {
          padding: 2rem;
        }

        .route-table input {
          padding: 0.5rem;
          margin-bottom: 1rem;
          width: 15%;
          box-sizing: border-box;
          margin-left: 1200px;
          position: relative;
          border-radius: 50px;
          text-align: center;
        }

        .route-table table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }

        .route-table th, .route-table td {
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: left;
        }

        .route-table th {
          background-color: #f5f5f5;
        }

        .total {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: #f5f5f5;
          border-top: 1px solid #ccc;
        }
        `}
      </style>
      <h2>Route Table</h2>
      <input 
        type="text"
        placeholder="Search by 'LXB number'"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>LXB Number</th>
            <th>State Name</th>
            <th>Last Collection Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.lxb_number}</td>
              <td>{route.state_name}</td>
              <td>{route.planing_date ? new Date(route.planing_date).toLocaleDateString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RouteTable;
