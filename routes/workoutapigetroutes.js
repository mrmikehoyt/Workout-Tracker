const router = require('express').Router();
const Workout = require('../models/workoutschema');
// helped define routes by looking at .js files (files under public) 
router.get('/api/workouts', (req, res) => {
  //for finding documents 
    Workout.find()
  
      .then(dbWorkout => {
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  router.get('/api/workouts/range', (req, res) => {
    
    Workout.find({})
  

  
      .then(dbWorkout => {
  
        console.log(dbWorkout);
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  module.exports = router
