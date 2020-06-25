const router = require('express').Router();
const Workout = require('../models/workoutschema');

router.post('/api/workouts', (req, res) => {
//creating the document 
  Workout.create({})
//.then method needed to return promise . needed with mongoose
    .then(dbWorkout => {

      res.json(dbWorkout);

    })

    .catch(err => {

      res.json(err);

    });

});

router.put('/api/workouts/:id', ({ body, params }, res) => {
//for finding a single document using id field
  Workout.findByIdAndUpdate(

    params.id,

    { $push: { exercises: body } },

    // "runValidators" will ensure new exercises meet our schema requirements

    { new: true, runValidators: true }

  )

    .then(dbWorkout => {

      res.json(dbWorkout);

    })

    .catch(err => {

      res.json(err);

    });

});



module.exports = router


