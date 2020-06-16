const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    maxLength: 200,
  },
  duration: {
    type: Number,
    required: true,
    max: 2400,
    min: [0,'You can not workout for 0 minutes.']

  },
  //below is only for populating resistance exercises
  weight: {
    type: Number,
    required: true,
    min: [0,'Why go to the gym if your not going to lift anything?'],
    max: [2400]
  },

  reps: {
    type: Number,
    required: true,
    min: [0,'You need to do more than 0 reps'],
    max: [2400]
  },
  sets: {
    type: Number,
    required: true,
    min: [0,'You need to do more than 0 sets'],
    max: [2400]
  },
  //below is only for populating cardio exercises
  duration: {
    type: Number,
    required: true,
    min: [0,'You need to last longer than 0 min'],
    max: [2400]
  },
  distance: {
    type: Number,
    required: true,
    min: [0,'You need to go further than 0'],
    max: [2400]
  }
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
