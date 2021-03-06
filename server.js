const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path')

var mongodb = require('mongodb');
app.use(logger('dev'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));
//app.use('/', exerciseroutes);

app.use(require('./routes/workoutapigetroutes'));
app.use(require('./routes/workoutapisendroutes'));
app.use(require('./routes/workouthtmlgetroutes'));

// Static Files
app.use('/', express.static(path.join(__dirname, '/public')))

//for connecting to heroku
var MongoClient = mongodb.MongoClient;
//var url = 'mongodb://localhost/exercisetracker';      
var url = 'mongodb://mike:Cl1barat10@ds143900.mlab.com:43900/heroku_4xgx80gg';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {

    console.log('Connection established');


    //Close connection
    db.close();
  }
});
var url = process.env.MONGOLAB_URI;

//above for connecting to heroku 
//needed for connecting to mongoose database and creating document exercisetracker
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouttracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})






app.listen(process.env.PORT || 3000); {
  console.log(`App is running on port ${PORT}`)
}