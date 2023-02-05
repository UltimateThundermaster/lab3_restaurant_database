const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({
    address: {
        building: {
            type: String,
        },
        street: {
            type: String,
        },
        zipCode: {
            type: String,
        }
    },
    city: {
        type: String,
    },
    cuisine: {
        type: String,
    },
    name: {
        type: String,
    },
    restaurant_id: {
        type: String,
    }
})

const Restaurant = mongoose.model('restaurant', restaurantSchema)
module.exports = Restaurant