import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopicBox from '../../components/SupervisiorNav/TopicBox';
const Order = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/planning');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(row => row.lxb_number.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div className="App">
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin-top: 100px;
          }
          main {
            padding: 20px;
          }
          .search-container {
            display: flex;
            align-items: center;
            margin-bottom: 100px;
            margin-left: 1000px;
          }
          .search-container label {
            margin-right: 10px;
          }
          .search-container input {
            padding: 5px;
            margin-right: 10px;
            border-radius: 50px;
          }
          h1 {
            font-size: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table th, table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          table th {
            background-color: #f1f1f1;
          }
        `}
      </style>

      <main>
       <TopicBox/>
        <div className="search-container">
         
          <label htmlFor="routeSearch">LXB number:</label>
          <input
            type="text"
            id="routeSearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>LXB number</th>
              <th>State name</th>
              
              <th>NH3 Stock (L)</th>
              <th>TMTD Stock (L)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.lxb_number}</td>
                <td>{row.state_name}</td>
                <td>{row.today_liter}</td>
                <td>{row.nh3_stock}</td>
                <td>{row.tmt_d_stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Order;
