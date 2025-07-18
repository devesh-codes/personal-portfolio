const express = require('express');
const app = express();
const port = 3002;

app.get('/publisher', (req, res) => {
  res.send('Publisher Dashboard');
});

app.listen(port, () => {
  console.log(`Publisher service running at http://localhost:${port}`);
});
