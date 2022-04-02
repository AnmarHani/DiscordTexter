const express = require('express')

//configuration files (apollo, mongodb, express, discord)
const apollo = require('./config/apollo.js')
const mongodb = require('./config/mongodb.js')
const server = require('./config/server.js')
require('./discord.js')

const cors = require('cors')
const helmet = require('helmet')

const corsOptions = {
  origin: '*',
  credentials: true
}

const start = async() => {
  const app = express()

  app.use(helmet())
  app.use(cors(corsOptions))
  app.use(express.json()) //to make json responses
  
  await apollo(app)
  
  await mongodb()
  
  server(app, 4000)
}

start()