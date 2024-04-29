"use strict"

const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String
    }
})

const users = mongoose.model("users",UserSchema)

module.exports = users