const express = require('express')
require('colors')
require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandlerMiddleware')

connectDB()
const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
