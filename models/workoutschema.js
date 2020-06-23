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
      required: "Enter an workout type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter an workout name"
    },
    duration: {
      type: Number,
      required: "Enter an workout duration in minutes"
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
      //workouts array needed to populate mongoose and create database
  
    workouts: [
      {

        //defining schema
        type: {
          type: String,
          trim: true,
          required: "Enter a workout type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter a workout name"
        },
        duration: {
          type: Number,
          required: "Enter a workout duration in minutes"
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
  return this.workouts.reduce((total, workout) => {
    return total + workout.duration;
  }, 0);
});



//needed for creating database I think
const Workout = mongoose.model('Workout', workoutSchema)


module.exports = Workout;

