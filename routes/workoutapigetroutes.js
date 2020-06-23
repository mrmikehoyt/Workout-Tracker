const router = require('express').Router();
const Models = require('../models/');
router.get('/api/workouts', (req, res) => {

    Models.Workout.find()
  
      .then(dbWorkout => {
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  router.get('/api/workouts/range', (req, res) => {
  
    Models.Workout.find({})
  
      .limit(7)
  
      .then(dbWorkout => {
  
        console.log(dbWorkout);
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  module.exports = router
