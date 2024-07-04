import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';
import axios from 'axios';
import TopicBox from '../../components/SupervisiorNav/TopicBox';

const Planning = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [routes, setRoutes] = useState([]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/getdataplanning')
      .then(response => {
        const data = response.data.map(route => ({
          ...route,
          planningDate: new Date(route.planing_date)
        }));
        setRoutes(data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (date, routeId) => {
    setRoutes(prevRoutes =>
      prevRoutes.map(route =>
        route.id === routeId ? { ...route, planningDate: date } : route
      )
    );

    // Update date in the database
    axios.post('http://localhost:5000/updatedate', {
      id: routeId,
      planningDate: date
    })
    .then(response => {
      setFeedback('Date updated successfully!');
      setTimeout(() => setFeedback(''), 3000); // Clear feedback after 3 seconds
    })
    .catch(error => {
      setFeedback('Error updating date. Please try again.');
      setTimeout(() => setFeedback(''), 3000); // Clear feedback after 3 seconds
      console.error('There was an error updating the date!', error);
    });
  };

  const filteredRoutes = routes.filter(route =>
    route.state_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTodayLiters = filteredRoutes.reduce((total, route) => {
    const todayLiter = parseFloat(route.today_liter);
    return total + (isNaN(todayLiter) ? 0 : todayLiter);
  }, 0);

  return (
    
    <div className="route-table">
      <TopicBox/>
      <style>
        {`

        
        .route-table {
          width: 80%;
          margin: 85px;
          text-align: center;
        }

        .route-table h2 {
          margin-bottom: 30px;
        }

        .route-table input {
          margin-bottom: 20px;
          padding: 10px;
          width: 50%;
          font-size: 16px;
        }

        .route-table table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .route-table th, .route-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }

        .route-table th {
          background-color: #f4f4f4;
        }

        .total {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
        }

        .calendar-button {
          display: flex;
          align-items: center;
          background-color: red;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .calendar-button svg {
          margin-left: 5px;
        }
        .calendar-button {
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .calendar-button svg {
          margin-left: 5px;
        }

        .feedback {
          margin-top: 20px;
          font-size: 16px;
        }

        .feedback.success {
          color: green;
        }

        .feedback.error {
          color: red;
        }

        `}
      </style>
      
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
            <th>Planning Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.lxb_number}</td>
              <td>{route.state_name}</td>
              <td>{route.today_tapping}</td>
              <td>{route.today_liter}</td>
              <td>{route.remain_space}</td>
              <td>{route.nh3_stock}</td>
              <td>{route.tmt_d_stock}</td>
              <td>
                <DatePicker
                  selected={route.planningDate}
                  onChange={(date) => handleDateChange(date, route.id)}
                  customInput={<CalendarButton />}
                  dateFormat="dd/MM/yyyy"
                  showPopperArrow={false}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <span>Total Today Liters:</span>
        <span>{totalTodayLiters}L</span>
      </div>
      {feedback && <div className={`feedback ${feedback.includes('successfully') ? 'success' : 'error'}`}>{feedback}</div>}
    </div>
  );
};

const CalendarButton = React.forwardRef(({ value, onClick }, ref) => (
  <button className="calendar-button" onClick={onClick} ref={ref}>
    {value || 'Calendar'} <FiCalendar />
  </button>
));

export default Planning;
