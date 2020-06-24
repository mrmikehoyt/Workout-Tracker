const router = require('express').Router();
const Models = require('../models/workoutschema');
router.get('/api/workouts', (req, res) => {

    Models.find()
  
      .then(dbWorkout => {
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  router.get('/api/workouts/range', (req, res) => {
  
    Models.find({})
  
      //.limit(7)
  
      .then(dbWorkout => {
  
        console.log(dbWorkout);
  
        res.json(dbWorkout);
  
      })
  
      .catch(err => {
  
        res.json(err);
  
      });
  
  });
  
  module.exports = router
