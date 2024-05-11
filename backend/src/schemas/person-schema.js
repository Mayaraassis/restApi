const { Schema } = require('mongoose')

module.exports = new Schema({
  name: { type: String, default: null },
  age: { type: Number, default: null },
  gender: { type: String, default: null }
})
