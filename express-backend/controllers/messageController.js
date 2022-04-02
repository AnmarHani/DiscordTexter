const Message = require('../models/Message.js')

//get methods
const getAllMessages = async() => {
    const messages = await Message.find()
    return messages
}

const getOneMessage = async(id) => {
    const message = await Message.findById(id)
    return message
}

const searchMessageByBody = async(body) => {
    const message = await Message.findOne({body: {$regex: body.toLowerCase()}})
    return message
}

//post methods
const postMessage = async(args) => {
    const message = new Message({
        body:args.body.toLowerCase(),
        response:args.response
    }) //from the object (args) take (title) & (response)

    await message.save()

    return message
}

//delete methods
const deleteMessage = async(id) => {
    const message = await Message.findById(id)

    message.delete()

    return true
}

module.exports = {
    getAllMessages,
    getOneMessage,
    searchMessageByBody,

    postMessage,

    deleteMessage
}