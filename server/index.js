const express = require('express');

const app = express();

const PORT = 5150;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`)
});
