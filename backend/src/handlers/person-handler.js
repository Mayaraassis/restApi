const PersonModel = require('../models/Person')
const Validation = require('../validations/index')


class Person {

  static async createDocument(req, res) {
    const { name, age, gender } = req.body

    try {
      const isValidPerson = Validation.validatePerson(name, age, gender)
      if (isValidPerson.error) {
        res.status(422).json({ error: isValidPerson.error.message })
        return
      }

      await PersonModel.create({ name, age, gender })
      res.status(200).json({ message: 'Pessoa inserida com sucesso' })
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message || 'Falha ao criar documento' })
    }
  }

  static async getAllDocument(_, res) {
    try {
      const people = await PersonModel.find().lean()
      res.status(200).json(people)

    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getDocumentById(req, res) {
    const { id: idPerson } = req.params

    try {
      const person = await PersonModel.findOne({ _id: idPerson }).lean()
      if (!person) {
        res.status(422).json({ message: 'O usuário não foi encontrado' })
        return
      }
      res.status(200).json(person)
    } catch (error) {
      res.status(500).json({ error: error.message })

    }
  }

  static async updateDocumentById(req, res) {
    const { id: idPerson } = req.params
    const { name, age, gender } = req.body

    try {
      const isValidPerson = Validation.validatePerson(name, age, gender)
      if (isValidPerson.error) {
        res.status(422).json({ error: isValidPerson.error.message })
        return
      }

      const updatePerson = await PersonModel.updateOne({ _id: idPerson }, { name, age, gender }, { new: true })
      res.status(200).json(updatePerson)
    } catch (error) {
      res.status(500).json({ error: error })

    }
  }

  static async deleteDocumentById(req, res) {
    const { id: idPerson } = req.params

    try {
      const person = await PersonModel.findOne({ _id: idPerson }).lean()
      if (!person) {
        res.status(422).json({ message: 'O usuário não foi encontrado' })
        return
      }

      await PersonModel.deleteOne({ _id: idPerson })
      res.status(200).json({ message: 'Pessoa removida com sucesso' })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

module.exports = Person