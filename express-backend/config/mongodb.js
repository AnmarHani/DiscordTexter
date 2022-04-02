const mongoose = require('mongoose')
// require('dotenv').config()

const mongodb = async() => {
    await mongoose.connect("mongodb+srv://discord-texter:FBJCczG8ng3XA0Yn@discord-texter.iinrj.mongodb.net/discord-texter?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser:true
  })
}

module.exports = mongodb