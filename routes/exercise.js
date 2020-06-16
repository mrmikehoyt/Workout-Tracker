const router = require("express").Router();
const Exercise = require("../models/exercisecreate.js");

router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercise/one", ({ body }, res) => {
  Transaction.updateOne(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
