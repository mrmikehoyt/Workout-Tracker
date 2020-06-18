const mongoose = require('mongoose')
const Schema = mongoose.Schema
const exerciseSchema = new Schema({
  day: {
 type: Date,
default: Date.now
},

  exercises: [
    //exercises array needed to populate mongoose and create database
{


  type: {
    type: String,
    trim: true,
    required : "enter an exercise"
  },
  name: {
    type: String,
    trim: true,
    required : "enter a name",
  },
  duration: {
    type: Number,
    required: "enter a duration"
},
  //below is only for populating resistance exercises
  weight: {
    type: Number,
    trim: true,
    required: "Enter a weight"
  },
  reps: {
    type: Number,
 trim: true,
    required: "Enter reps"
    },
  sets: {
    type: Number,
    trim: true,
    required: "Enter sets"
  },
  //below is only for populating cardio exercises
  duration: {
    type: Number,
    required: "enter duration",
    
  },
  distance: {
    type: Number,
    trim: true,
    required: "enter distance"
  }
}
]

})
  
const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise;
