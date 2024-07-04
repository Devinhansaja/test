import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TopicBox from '../../components/SupervisiorNav/TopicBox';


	

function Estatereport() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();

  const handleDateChange = (date) => {
    if (date <= currentDate) {
      setSelectedDate(date);
    }
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    if (nextDay <= currentDate) {
      setSelectedDate(nextDay);
    }
  };

  return (
    
    <div className="App">
        <TopicBox/>
            <style>
                {`
            body {
                font-family: Arial, sans-serif;
                background-color: black;
                color: rgb(0, 0, 0);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 10px;
              }
              
              .container {
                background-color: rgb(255, 254, 254);
                padding: 50px;
                border-radius: 10px;
                text-align: left;
                width: 1000px;
                justify-content: space-around;
               
              }
              
              .date-picker {
                margin-bottom: 20px;
                margin-left: 520px;
              }
              
              h1{
                margin-left: -200px;
              }
              .details {
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
              }
              
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
              }
              
              th, td {
                border: 1px solid rgb(0, 0, 0);
                padding: 20px;
                text-align: center;
            
              }
              
              button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                margin-top: 100px;
                border-radius: 50px;
              }
            `}
          </style>
          

      <div className="container">
        <div className="date-picker">

          <label>Search (Calendar):</label>
          <DatePicker
          
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            maxDate={currentDate}
           

          />
          <h1>Estate Report</h1>
        </div>

        <div className="details">
          <div>Date: {selectedDate.toDateString()}</div>
          <br/>
          <div>Vehicle No: ____________________</div>
          
          <div>Driver: ____________________</div>
          <div>Helper: ____________________</div>
          <div>Supervisor: ____________________</div>

          <table>
            <thead>
              <tr>
                <th>State Name</th>
                <th>drc</th>
                <th>vfa</th>
                <th>NH3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <button onClick={handleNextDay} disabled={selectedDate >= currentDate}>Next day</button>
      </div>
    </div>
  );
}

export default Estatereport;