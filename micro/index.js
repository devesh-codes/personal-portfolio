const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Forward requests to the appropriate microservice
app.get('/admin', async (req, res) => {
  const response = await axios.get('http://localhost:3001/admin');
  res.send(response.data);
});

app.get('/publisher', async (req, res) => {
  const response = await axios.get('http://localhost:3002/publisher');
  res.send(response.data);
});

app.get('/user', async (req, res) => {
  const response = await axios.get('http://localhost:3003/user');
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`API Gateway running at http://localhost:${port}`);
});
