require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
  response.send(`
  <div>
    <p>hello world</p>
  </div>
  `)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})