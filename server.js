const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const exerciseroutes = require ('./routes/exerciseroutes')
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path')
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', exerciseroutes)
// Static Files
app.use('/', express.static(path.join(__dirname, '/public')))
//needed for connecting to mongoose database and creating document exercisetracker
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/exercisetracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})