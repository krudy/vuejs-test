const express = require('express');
const path = require('path');

const api = require('./routes');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../client/static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.get('/result', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/api/', api);

app.listen(port, () => console.log(`Carsguide listening on port ${port}!`));
