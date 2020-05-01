require('dotenv').config()
const mongoose = require('mongoose')
const Feeding = require('./models/feeding')
// const User = require('./models/user')

const url = process.env.MONGO_URI
console.log('connecting to ', url)

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
  )
  .then(result => {
    console.log('connected to mongodb')
  })
  .catch((error) => {
    console.log('error connecting to mongodb', error.message)
  })

const feedingEvent = new Feeding({
  userId: '5eaca3a6b72b621968f7398d',
  time: Date.now(),
  location: {
    type: 'Point',
    coordinates: [-104.9903, 39.7392]
  },
  numDucks: 12,
  foodType: 'bread',
  foodAmount: 1
})

feedingEvent
  .save()
  .then(response => {
    console.log('event saved')
    mongoose.connection.close()
  })
  .catch(error => {
    console.log('error saving event to mongodb', error.message)
  })