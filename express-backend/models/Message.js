const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    response: {
        type: [String],
        required: true
    },
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message