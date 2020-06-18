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

//defining schema
  type: {
    type: String,
    trim: true,
    required: "Enter an exercise type"
    },
    name: {
    type: String,
    trim: true,
    required: "Enter an exercise name"
    },
    duration: {
    type: Number,
    required: "Enter an exercise duration in minutes"
    },
    weight: {
     
    type: Number
    },
    reps: {
    type: Number
    },
    sets: {
    type: Number
    },
    distance: {
    type: Number
    }
    }
    ]
    })
    



//needed for creating database I think
const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise;
