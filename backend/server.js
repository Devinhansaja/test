const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./my-backend/bd'); // Adjust the path if necessary

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.get('/data', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM planning');
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/getdataplanning', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM planning');
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/planning', async (req, res) => {
  const query = 'SELECT lxb_number, state_name, today_liter, nh3_stock, tmt_d_stock FROM planning'; // Adjust the table name if needed
  try {
    const [results] = await pool.query(query);
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/updatedate', async (req, res) => {
  const { id, planningDate } = req.body;

  if (!id || !planningDate) {
    return res.status(400).send('Missing id or planningDate');
  }

  const query = 'UPDATE planning SET planing_date = ? WHERE id = ?';
  try {
    const [results] = await pool.query(query, [planningDate, id]);
    res.send('Date updated successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get('/api/routes', (req, res) => {
  const query = 'SELECT id, lxb_number AS lxbNumber, state_name AS stateName, planning_date AS lastCollectionDate FROM planning';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
