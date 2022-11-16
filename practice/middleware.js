const express = require("express");
const app = express();

const morgan = require('morgan');

const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res
app.use(morgan('tiny'))
// app.use([logger, authorize]);

app.get("/",(req, res) => {
  res.send("HOME");
});

app.get('/about', (req, res) => {
  res.send("About Page");
})

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

