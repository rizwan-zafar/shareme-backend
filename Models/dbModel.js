const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    channel: {
        type: String,
        require:[true,"Gym Name is required"]
    },
    description: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        require: true
    },
    shares: {
        type: Number,
        require: true
    },
    messages: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model('shareMeVideos', schema)

 