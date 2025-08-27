const express = require('express');
const app = express();
const cors = require('cors')
//טוען את הראוטרים מהתקיה
const routers = require('./src/routers/routers');

app.use(cors());
app.use(express.json());

//כל הראוטרים ירוכזו כאן
app.use('/', routers);

//מה זה?
app.get('/', (req, res) => {
  res.send('Welcome to server routers');
});

module.exports = app;