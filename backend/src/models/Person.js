const PersonSchema = require('../schemas/person-schema')
const MongoDB = require('../database/mongodb')

const connection = MongoDB.createConnection()
const Person = connection.model('person', PersonSchema, 'persons')

module.exports = Person
