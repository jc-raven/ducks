const feedingsRouter = require('express').Router()
const Feeding = require('../models/feeding')

feedingsRouter.get('/', (request, response) => {
  Feeding.find({}).then(feedings => {
    response.json(feedings.map(f => f.toJSON()))
  })
})

feedingsRouter.get('/:id', (request, response) => {
  Feeding.findById(request.params.id)
    .then(feeding => {
      if (feeding) {
        response.json(feeding.toJSON())
      } else {
        response.status(404).end()
      }
    })
})

feedingsRouter.post('/', (request, response) => {
  const body = request.body
  if (body === undefined) {
    return response.status(400).json({ error: 'missing content!' })
  }
  const feeding = new Feeding({
    // userId: ''
    time: body.time,
    location: body.location,
    numDucks: body.numDucks,
    foodType: body.foodType,
    foodAmount: body.foodAmount
  })

  feeding.save()
    .then(savedFeeding => {
      console.log('saved successfully')
      response.json(savedFeeding.toJSON())
    })
    .catch(error => console.log('error saving', error))
})

module.exports = feedingsRouter