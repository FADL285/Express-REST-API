const express = require('express');
const helmet = require('helmet');
const logging = require('./middlewares/logging');
const setHeader = require('./middlewares/headers');
// Import mongoose
const mongoose = require('mongoose');

// Connect Mongo.
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log('CONNECTED SUCCESSFULLY...');
}
main().catch((err) => console.log('ERROR:', err));
// End mongoose connection.

const studentsRoute = require('./routes/students');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

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
app.use('/api/users', usersRoute);
app.use('/api/login', authRoute);

// //////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
