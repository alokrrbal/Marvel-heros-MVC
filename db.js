const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoDataBaseUrl)

module.exports={
    connection
}

//marvelHeros