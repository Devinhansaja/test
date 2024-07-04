import React, { useState, useEffect } from 'react';

const Lastcollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/routes')
      .then(response => response.json())
      .then(data => setRoutes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRoutes = routes.filter(route =>
    route.lxbNumber.toLowerCase().includes(searchTerm.toLowerCase())
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
        padding: 20px;
        
      }
      
      .route-table input {
        padding: 0.5rem;
        margin-bottom: 1rem;
        width: 15%;
        box-sizing: border-box;
        margin-left:1100px;
        border-radius:50px
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
    
      <h2>Kamurupitiya Route</h2>
      <input
        type="text"
        placeholder="Search by ''LXB number''  "
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>LXB number</th>
            <th>State name</th>
            <th>Last collection date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.lxbNumber}</td>
              <td>{route.stateName}</td>
              <td>{route.lastCollectionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lastcollection;
