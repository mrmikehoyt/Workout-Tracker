const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;
const app = express();
const db1 = require('../models')
var mongodb = require('mongodb');
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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/exercisetracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})





app.listen(process.env.PORT || 3000);  {
    console.log(`App is running on port ${PORT}`)
}

var exercises2 = [
    {
      day: new Date().setDate(new Date().getDate()-10),
      exercises : [
        {
        
        'type': 'resistance',
    'name': 'Bicep Curl',
    'duration': 20,
    'weight': 100,
    'reps':10,
    'sets':4,
    //'distance':
}
]
},

  
    {
      day: new Date().setDate(new Date().getDate()-9),  
      exercises: [
            {
        

        'type': 'resistance',
        'name': 'Lateral Pull',
        'duration': 20,
        'weight': 300,
        'reps':10,
        'sets':4,
        //'distance':
    }
    ]
    },
    {
      day: new Date().setDate(new Date().getDate()-8),
      exercises: [
        {
          type: "resistance",
          name: "Push Press",
          duration: 25,
          weight: 185,
          reps: 8,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-7),
      exercises: [
        {
          type: "cardio",
          name: "Running",
          duration: 25,
          distance: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-6),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 285,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-5),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-4),
      exercises: [
        {
          type: "resistance",
          name: "Quad Press",
          duration: 30,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-3),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-2),
      exercises: [
        {
          type: "resistance",
          name: "Military Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date().setDate(new Date().getDate()-1),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    }
  ];
  
    

    
    
    db1.Exercise.deleteMany({}) 
  .then(() => db1.Exercise.collection.insertMany(exercises2)) 
  .then(data => { 
    console.log(data.result.n + " records inserted!"); 
  
  process.exit(0); 
  }) 
  .catch(err => { 
  console.error(err); 
  process.exit(1); 
  }); 
  