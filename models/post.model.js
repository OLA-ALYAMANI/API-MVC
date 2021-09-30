const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    text:{
        type: String,
        trim: true,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post