const messageRoutes = require('../routes/messageRoutes.js')
require('dotenv').config()

const server = (app, port) => {
    //routes
    messageRoutes(app)

    app.listen(process.env.PORT || 80, () => {
      console.log(`App listening on port http://localhost:${port}`)
    })
}

module.exports = server