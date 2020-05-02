
const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const feedingsRouter = require('./controllers/feedings')
const authRouter = require('./controllers/auth')

const app = express()
app.use(express.json())

app.use('/feedings', feedingsRouter)
app.use('/login', authRouter)

mongoose
  .connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to mongodb')
  })
  .catch((error) => {
    console.log('error connecting to mongodb', error.message)
  })

module.exports = app