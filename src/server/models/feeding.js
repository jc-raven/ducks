const mongoose = require('mongoose')

// a model representing a location / Mongo GeoJSON
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

// a model representing a feeding event
const feedingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false
  },
  time: {
    type: Date,
    required: true
  } ,
  location: {
    type: pointSchema,
    required: true
  },
  numDucks: {
    type: Number,
    required: true
  },
  foodType: {
    type: String,
    required: true
  },
  foodAmount: { // in kg?
    type: Number,
    required: true
  }
})
feedingSchema.set('toJSON', {
  transform: (document, retObj) => {
    retObj.id = retObj._id.toString()
    // delete returnedObject._id
    delete retObj.__v
  }
})

module.exports = mongoose.model('Feeding', feedingSchema)