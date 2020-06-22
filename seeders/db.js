let mongoose = require("mongoose"); 
let db = require("../models/index"); 
 
 
 mongoose.connect("mongodb://localhost/exercisetracker", { 
   useNewUrlParser: true, 
   useFindAndModify: false 
 }); 

var exercises = [{
    'type': 'resistance',
    'name': 'dubmess',
    'duration': 50,
    'weight': 564,
    'reps':6,
    'sets':4,
    'distance':6
    }]
    
    
    db.Exercise.deleteMany({}) 
  .then(() => db.Exercise.collection.insertMany(exercises)) 
  .then(data => { 
    console.log(data.result.n + " records inserted!"); 
  
  process.exit(0); 
  }) 
  .catch(err => { 
  console.error(err); 
  process.exit(1); 
  }); 
  