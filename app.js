require('dotenv').config()
const express = require('express')
const restaurantRoute = require('./routes/restaurant.route')
const db = require('./db/connection')
const app = express()

db()
app.use(express.json())
app.use('/restaurants', restaurantRoute)


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is up at port ${port}`))