class Validation {
  static validatePerson(name, age, gender) {
    const validations = [
      { condition: isNaN(age), message: 'A idade deve ser um número' },
      { condition: typeof name !== 'string', message: 'O nome deve ser uma string' },
      { condition: typeof gender !== 'string', message: 'O gênero deve ser uma string' }
    ];

    const error = validations.find(validation => validation.condition);
    return error ? { error: error.message } : true;
  }
}

module.exports = Validation