const authRouter = require('express').Router()
const User = require('../models/user')

authRouter.post('/', (request, response) => {
  const body = request.body
  if (body === undefined) {
    return response.status(400).json({ error: 'missing body' })
  }

  User.findOne(
    { 'userName': body.userName, 'password': body.password },
    (err, user) => {
      if(err || !user) {
        console.log('unable to find user', err)
        return response.status(400).json({ error: 'unable to find user' })
      }
      console.log('found user with id:', user._id)
      return response.json(user.toJSON())
    }
  )
})

module.exports = authRouter