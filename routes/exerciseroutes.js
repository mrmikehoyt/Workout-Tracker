const router = require("express").Router();
const Exercise = require("../models/exercisecreate.js");
const path = require("path");
const express = require("express");

const publicDir = path.join(__dirname,  "public");
router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/one", ({ body }, res) => {
  Exercise.updateOne(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts:id", ({ body }, res) => {
  Exercise.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/exercise", (req, res) => {

  res.sendFile(path.join(__dirname, '../public/exercise.html'))

})
router.post("/api", (req, res) => {

  res.sendFile(path.join(__dirname, '../public/api.js'))

})

.post((req,res) => {

  db.Exercise.create({}, function(err, doc) {

    if (err) {

      console.log(err);

    } else {

      res.json(doc);

    }

  })

})


module.exports = router;
