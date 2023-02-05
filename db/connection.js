const mongoose = require('mongoose')

const connectDb = async () => {
    try {
       mongoose.set('strictQuery', true);
      await mongoose.connect(process.env.MONGO_URI)
      console.log('connected to mongodb')
    } catch (error) {
      console.log(error.message)
    }

    mongoose.set('strictQuery', false);
  }

module.exports = connectDb