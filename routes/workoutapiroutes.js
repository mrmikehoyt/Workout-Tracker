const router = require('express').Router();
const path = require('path');
const Exercise = require('../models/exercisecreate.js');
const db = require('../models')

router.post('/api/workouts', (req, res) => {

  Exercise.create({})

    .then(dbExercises => {

      res.json(dbExercises);

    })

    .catch(err => {

      res.json(err);

    });

});

router.put('/api/workouts/:id', ({ body, params }, res) => {

  Exercise.findByIdAndUpdate(

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

router.get('/api/workouts', (req, res) => {

  Exercise.find()

    .then(dbExercises => {

      res.json(dbExercises);

    })

    .catch(err => {

      res.json(err);

    });

});

router.get('/api/workouts/range', (req, res) => {

  Exercise.find({})

    .limit(7)

    .then(dbExercises => {

      console.log(dbExercises);

      res.json(dbExercises);

    })

    .catch(err => {

      res.json(err);

    });

});

router.delete('/api/workouts', ({ body }, res) => {

  Exercise.findByIdAndDelete(body.id)

    .then(() => {

      res.json(true);

    })

    .catch(err => {

      res.json(err);

    });

});
/* route for exercise.html */

router.get('/exercise', (req, res) => {

  res.sendFile(path.join(__dirname, '../public/exercise.html'));

});

/* route for stats.html */

router.get('/stats', (req, res) => {

  res.sendFile(path.join(__dirname, '../public/stats.html'));
  //const Exercise = mongoose.model('Exercise', exerciseSchema)
  
});



module.exports = router;
