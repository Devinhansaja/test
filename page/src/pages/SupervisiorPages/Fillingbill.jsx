import React, { useState } from 'react';
import TopicBox from '../../components/SupervisiorNav/TopicBox'
import Footer from '../../components/Footer/footer';



const generateCode = (currentCode) => {
  let letter = currentCode.charAt(0);
  let number = parseInt(currentCode.slice(1));

  number += 1;
  if (number > 9999) {
    number = 0;
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
  }

  return `${letter}${number.toString().padStart(4, '0')}`;
};

const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

const initialState = {
  vehicleNumber: '',
  driver: '',
  helper: '',
  estateRegNo: 'LXB-',
  estateName: '',
  rows: [{ sample: 1, mr: '', drc: '', liters: '' }],
  totalLiters: 0,
  customerApprove: false,
  driverApprove: false,
  supervisorApprove: false,
  outTime: '',
};

const  Fillingbill = () => {
  const [code, setCode] = useState('A0001');
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({ ...formState, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = formState.rows.map((row, i) => (i === index ? { ...row, [field]: value } : row));
    setFormState({ ...formState, rows: updatedRows });
    calculateTotalLiters(updatedRows);
  };

  const addRow = () => {
    setFormState((prevState) => ({
      ...prevState,
      rows: [...prevState.rows, { sample: prevState.rows.length + 1, mr: '', drc: '', liters: '' }],
    }));
  };

  const calculateTotalLiters = (rows) => {
    const total = rows.reduce((acc, row) => acc + (parseFloat(row.liters) || 0), 0);
    setFormState((prevState) => ({ ...prevState, totalLiters: total }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={{ backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
      <TopicBox/>
       
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
           
          }
          
          form {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            margin-top: 50px;

          }
          form div {
            margin-bottom: 25px;
          }
          .flex-container {
            display: flex;
            gap: 10px;
          }
          .flex-container div {
            flex: 1;
          }
          .flex-container.align-right {
            justify-content: space-between;
          }
          label {
            display: block;
            margin-bottom: 5px;
          }
          input[type="text"],
          input[type="date"],
          input[type="time"],
          input[type="number"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: #f9f9f9;
          }
          input[type="text"]:focus,
          input[type="date"]:focus,
          input[type="time"]:focus,
          input[type="number"]:focus {
            outline: none;
            background: #fff;
          }
          input[type="checkbox"] {
            margin-left: 10px;
          }
          button {
            padding: 10px 20px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            background: #4b6cb7;
            color: #fff;
            cursor: pointer;
            transition: background 0.3s;
          }
          button:hover {
            background: #3a53a1;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          table, th, td {
            border: 1px solid #ddd;
          }
          th, td {
            padding: 10px;
            text-align: left;
          }
          th {
            background: #f1f1f1;
          }
          td input[type="text"],
          td input[type="number"] {
            width: 100%;
            padding: 5px;
            margin: 0;
          }
        `}
      </style>
     
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          <div>
            <label>Date:</label>
            <input type="date" value={getCurrentDate()} readOnly />
          </div>
          <div>
            <label>Time:</label>
            <input type="time" name="time" onChange={handleChange} style={{ width: '90%' }} />
          </div>
        </div>
        <div className="flex-container">
          <div>
            <label>Vehicle Number:</label>
            <input type="text" name="vehicleNumber" onChange={handleChange} />
          </div>
          <div>
            <label>Driver:</label>
            <input type="text" name="driver" onChange={handleChange} />
          </div>
          <div>
            <label>Helper:</label>
            <input type="text" name="helper" onChange={handleChange} />
          </div>
        </div>
        <div className="flex-container">
          <div>
            <label>Estate Reg No:</label>
            <input
              type="text"
              name="estateRegNo"
              value={formState.estateRegNo}
              onChange={(e) => {
                const value = e.target.value.replace('LXB-', '');
                if (/^\d*$/.test(value)) {
                  setFormState({ ...formState, estateRegNo: `LXB-${value}` });
                }
              }}
            />
          </div>
          <div>
            <label>Estate Name:</label>
            <input type="text" name="estateName" onChange={handleChange} />
          </div>
        </div>
        <div>
          <h2>Table</h2>
          <table>
            <thead>
              <tr>
                <th>Sample</th>
                <th>M.R</th>
                <th>D.R.C</th>
                <th>Liters</th>
              </tr>
            </thead>
            <tbody>
              {formState.rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.sample}</td>
                  <td>
                    <input type="text" value
={row.mr} onChange={(e) => handleRowChange(index, 'mr', e.target.value)} />
                  </td>
                  <td>
                    <input type="text" value={row.drc} onChange={(e) => handleRowChange(index, 'drc', e.target.value)} />
                  </td>
                  <td>
                    <input type="number" value={row.liters} onChange={(e) => handleRowChange(index, 'liters', e.target.value)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addRow}>More</button>
        </div>
        <div className="flex-container align-right">
          <div>
            <label>Tank No:</label>
            <input type="number" name="tankNo" onChange={handleChange} />
          </div>
          <div style={{ width: '10%' }}>
            <label>Total of Liter(L):</label>
            <input type="text" value={formState.totalLiters} readOnly />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <label>Chemical Issue: Ammonia</label>
            <input type="checkbox" name="ammoniaIssue" onChange={handleChange} />
          </div>
          <div style={{ display: 'flex' }}>
            <label>Chemical Issue: TMTD</label>
            <input type="checkbox" name="tmtdIssue" onChange={handleChange} />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <label>Customer Approve:</label>
            <input type="checkbox" name="customerApprove" onChange={handleChange} />
          </div>
          <div style={{ display: 'flex' }}>
            <label>Driver Approve:</label>
            <input type="checkbox" name="driverApprove" onChange={handleChange} />
          </div>
          <div style={{ display: 'flex' }}>
            <label>Supervisor Approve:</label>
            <input type="checkbox" name="supervisorApprove" onChange={handleChange} />
          </div>
        </div>
        <div>
          <label>Out Time:</label>
          <input type="time" name="outTime" onChange={handleChange} style={{ width: '10%' }} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
    
  );
};

export default Fillingbill;
