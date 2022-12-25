const express = require('express')
const dotenv = require('dotenv').config // for environment variables
const {errorHandler} = require('./middleware/errorMiddleware') // bringing in errorhandler from middleware
const port = process.env.PORT || 5001


const app = express() // initialize express


// to be able to read body data
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use('/api/boards', require('./routes/boardRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))