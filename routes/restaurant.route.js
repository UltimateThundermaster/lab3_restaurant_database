const router = require('express').Router()
const restaurantController = require('../controller/restaurant.controller')

router.get('/', restaurantController.getRestaurant)

router.get('/cuisine/:cuisine',restaurantController.getDetailsByCuisine)

router.get('/restaurants', restaurantController.getSortedRestaurant)

router.get('/Delicatessen', restaurantController.getDelicatessenRestaurant)


module.exports = router