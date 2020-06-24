const router = require('express').Router();
const Models = require('../models/workoutschema');

router.post('/api/workouts', (req, res) => {

  Models.create({})

    .then(dbWorkout => {

      res.json(dbWorkout);

    })

    .catch(err => {

      res.json(err);

    });

});

router.put('/api/workouts/:id', ({ body, params }, res) => {

  Models.findByIdAndUpdate(

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


