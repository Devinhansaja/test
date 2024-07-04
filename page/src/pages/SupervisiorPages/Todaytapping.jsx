import React, { useState } from 'react';
import '../../components/SupervisiorNav/TopicBox';
import TopicBox from '../../components/SupervisiorNav/TopicBox';



const Todaytapping = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [routes] = useState([
    { id: 1, lxbNumber: 'lxb 109', stateName: 'walahaduwa', todayTapping: '345', todayLiter: '4000', remainSpace: '800L', nh3Stock: '300L', tmtdStock: '1L', collectionDate: '3 days' },
    { id: 2, lxbNumber: 'lxb 201', stateName: 'example', todayTapping: '-', todayLiter: '-', remainSpace: '10000L', nh3Stock: '1000L', tmtdStock: '2L', collectionDate: '6 days' }
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRoutes = routes.filter(route =>
    route.stateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTodayLiters = filteredRoutes.reduce((total, route) => {
    const todayLiter = parseFloat(route.todayLiter);
    return total + (isNaN(todayLiter) ? 0 : todayLiter);
  }, 0);

  return (
    <div className="App">
        <TopicBox/>
      <style>
        {`
        body {
          font-family: Arial, sans-serif;
          margin-top: 100px;
        }
        
        .App {
          text-align: center;
        }
        
        h2{
          text-align: left;
        }
        
        .route-table {
          padding: 2rem;
        }
        
        .route-table input {
          padding: 0.5rem;
          margin-bottom: 1rem;
          width: 10%;
          box-sizing: border-box;
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
          justify-content: space-around;
          padding: 10px;
          background-color: #ffffff;
          border: 1px  #ccc;
          border-radius: 50px;
          width: 400px;
          margin-left: -10px;
         
        }
        
        
        `}
      </style>
     
      <div className="route-table">
        <h2>Kamurupitiya Route</h2>
        <input
          type="text"
          placeholder="Search by State name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>LXB number</th>
              <th>State name</th>
              <th>Today Tapping</th>
              <th>Today Liter</th>
              <th>Remain Space</th>
              <th>NH3 Stock</th>
              <th>T.M.T.D Stock</th>
              <th>Collection Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoutes.map(route => (
              <tr key={route.id}>
                <td>{route.id}</td>
                <td>{route.lxbNumber}</td>
                <td>{route.stateName}</td>
                <td>{route.todayTapping}</td>
                <td>{route.todayLiter !== '-' ? `${route.todayLiter}L` : '-'}</td>
                <td>{route.remainSpace}</td>
                <td>{route.nh3Stock}</td>
                <td>{route.tmtdStock}</td>
                <td>{route.collectionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <span>Total Today Liters:</span>
          <span>{totalTodayLiters}L</span>
        </div>
      </div>
    </div>
  );
}

export default Todaytapping;
