const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
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
  },
  //needed for virtual field (total duration) to be displayed
  {
    toObject: {
      virtuals: true
    },

    toJSON: {
      virtuals: true

    }

  }
);


//for declaring virtual attribute on schema client

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});



//needed for creating database I think
const Exercise = mongoose.model('Exercise', workoutSchema)
//const User = mongoose.model("User", UserSchema);
//for seeding duplicates are created if run multiple times. need to troubleshoot

module.exports = Exercise;

