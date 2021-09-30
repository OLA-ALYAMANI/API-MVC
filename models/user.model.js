const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    //like object
    name:{
        type: String,
        trim: true,
        required: true
    },
    age:{
        type: Number,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        // for not repet and defrent
        unique: true

    }
})

module.exports = mongoose.model("User", userSchema)