const mongoose = require('mongoose')
const Person = mongoose.model('Person', {
    name: String,
    age: Number,
    gender: String
})

module.exports = Person