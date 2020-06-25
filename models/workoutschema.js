const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    //for setting the date for each document item created in mongoose 
    day: {
      type: Date,
      default: Date.now
    },
      //workouts array needed to populate mongoose and create database
  
    exercises: [
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
  return this.exercises.reduce((total, workout) => {
    return total + workout.duration;
  }, 0);
});



//needed for creating database I think
const Workout = mongoose.model('workouttracker', workoutSchema)

//exporting workout module
module.exports = Workout;

