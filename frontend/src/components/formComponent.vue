<template>
  <div class="form">
    <form @submit.prevent="submitForm"  class="form-container">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="idade">Idade:</label>
        <input type="number" id="idade" v-model="formData.age" required />
      </div>
      <div class="form-group">
        <label for="genero">Gênero:</label>
        <select id="genero" v-model="formData.gender" required>
          <option value="">Selecione</option>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
        </select>
      </div>
      <div class="form-group">
        <button type="submit" class="btn-submit">Cadastrar</button>
      </div>
    <div v-if="showNotification" class="notification">Cadastro realizado com sucesso!</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "formComponent",
  data(){
    return{
       formData: {
        name: '',
        age: null,
        gender: ''
      },
      showNotification: false
    }
  },
  methods: {
    submitForm(){
      axios.post('http://localhost:8000/person', this.formData)
      .then(response => {
        console.log(response.data)
        this.showNotification = true;
        this.clearForm()
      })
      .catch(error => {
        console.error(error)
      })
    },
     clearForm() {
      this.formData.name = '';
      this.formData.age = null;
      this.formData.gender = '';
    }
  }
};
</script>

<style scoped>
.form{
  width: 100vw;

}
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-submit {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
}
.notification {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 10px;
}
</style>