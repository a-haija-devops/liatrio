'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const time = new Date();

// App
const app = express();
app.get('/devops', (req, res) => {
  res.json({"message": "Automate all the things!", "timestamp": time });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);