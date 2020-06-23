const router = require('express').Router();
const Workout = require('../models/');
router.get('/api/workouts', (req, res) => {

    Workout.find()
  
      .then(dbWorkout => {
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  router.get('/api/workouts/range', (req, res) => {
  
    Exercise.find({})
  
      .limit(7)
  
      .then(dbWorkout => {
  
        console.log(dbWorkout);
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  