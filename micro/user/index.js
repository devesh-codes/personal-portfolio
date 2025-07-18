const express = require('express');
const app = express();
const port = 3003;

app.get('/user', (req, res) => {
  res.send('User Dashboard');
});

app.listen(port, () => {
  console.log(`User service running at http://localhost:${port}`);
});
