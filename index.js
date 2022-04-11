const express = require('express');
const helmet = require('helmet');
const logging = require('./middlewares/logging');
const setHeader = require('./middlewares/headers');

const studentsRoute = require('./routes/students');

const app = express();
const port = process.env.PORT || 3000;

app.use(setHeader);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // render static pages
app.use(helmet());
app.use(logging);

// Students API
app.use('/api/students', studentsRoute);

// //////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
