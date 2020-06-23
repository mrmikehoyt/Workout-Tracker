const router = require('express').Router();
const Models = require('../models/');

router.post('/api/workouts', (req, res) => {

  Models.Workout.create({})

    .then(dbWorkout => {

      res.json(dbWorkout);

    })

    .catch(err => {

      res.json(err);

    });

});

router.put('/api/workouts/:id', ({ body, params }, res) => {

  Models.Workout.findByIdAndUpdate(

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

Models.Workout.findByIdAndDelete(body.id)

    .then(() => {

      res.json(true);

    })

    .catch(err => {

      res.json(err);

    });

});


module.exports = router


