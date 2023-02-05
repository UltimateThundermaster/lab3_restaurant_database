const Restaurant = require('../model/restaurant.model')

const getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({})
        res.status(200).json({restaurant})
    }catch(err) {
        res.status(500).json({err})
    }
}

const getDetailsByCuisine = async (req, res) => {
    const cuisine = req.params.cuisine
    try {
        const restaurant = await Restaurant.find({ cuisine })
        res.status(200).json({ restaurant })
    }catch(err) {
        res.status(500).json({ err })
    }
}

const getSortedRestaurant = async (req, res) => {
    const sortBy = req.query.sortBy
    let sort = 1
    if(sortBy) {
        if(sortBy.toLowerCase() === 'asc') {
            sort = 1
        }else if(sortBy.toLowerCase() === 'desc') {
            sort = -1
        }
    }
    try {
        const restaurant = await Restaurant.find({})
            .select('_id cuisine name city restaurant_id')
            .sort({restaurant_id: sort})
        res.status(200).json({ restaurant })
    }catch(err) {
        res.status(500).json({ err })
    }
}

const getDelicatessenRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({ cuisine: "Delicatessen", city: { $ne: "Brooklyn" }})
            .select('cuisine name city -_id')
            .sort({name: 1})
        res.status(200).json({restaurant})
    }catch(err) {
        res.status(500).json({ err })
    }
}

module.exports = {
    getRestaurant,
    getDetailsByCuisine,
    getSortedRestaurant,
    getDelicatessenRestaurant
}