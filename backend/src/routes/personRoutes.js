const routes = require('express').Router()
const Person = require('../handlers/person-handler')

routes.post('/person', Person.createDocument)
routes.get('/person', Person.getAllDocument)
routes.get('/person/:id', Person.getDocumentById)
routes.patch('/person/:id', Person.updateDocumentById)
routes.delete('/person/:id', Person.deleteDocumentById)

module.exports = routes