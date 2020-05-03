const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./controllers/auth')
const config = require('./utils/config')
const feedingsRouter = require('./controllers/feedings')

const app = express()
app.use(cors())
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