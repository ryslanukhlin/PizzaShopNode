const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name: {type: String, required: true, min: 2, max:20},
    email: {type: String, required: true},
    password: {type: String, required: true, min: 6},
    date: { type: Date, default: Date.now },
})

module.exports = model("User", userSchema)