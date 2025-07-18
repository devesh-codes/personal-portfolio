const express = require('express');
const app = express();
const port = 3001;

app.get('/admin', (req, res) => {
  res.send('Admin Dashboard');
});

app.listen(port, () => {
  console.log(`Admin service running at http://localhost:${port}`);
});
