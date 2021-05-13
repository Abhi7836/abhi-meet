const dotenv =require('dotenv');
const express = require("express");
const colors =require('colors');

dotenv.config()
const app = express();

app.get('/api',function(req, res) {res.send(" API hello from backend");})


const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)