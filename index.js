const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit', (req, res) => {
  console.log('Data received:', req.body);
  res.send({ status: 'Data received by demo proxy' });
});

app.listen(3000, () => {
  console.log('Demo proxy running on port 3000');
});
