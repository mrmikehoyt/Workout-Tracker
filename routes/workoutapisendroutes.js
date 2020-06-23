const router = require('express').Router();
const Workout = require('../models/');

router.post('/api/workouts', (req, res) => {

  Workout.create({})

    .then(dbWorkout => {

      res.json(dbWorkout);

    })

    .catch(err => {

      res.json(err);

    });

});

router.put('/api/workouts/:id', ({ body, params }, res) => {

  Exercise.findByIdAndUpdate(

    params.id,

    { $push: { workouts: body } },

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


router.delete('/api/workouts', ({ body }, res) => {

Workout.findByIdAndDelete(body.id)

    .then(() => {

      res.json(true);

    })

    .catch(err => {

      res.json(err);

    });

});


module.exports = router


