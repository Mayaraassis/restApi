<template>
  <div class="container">
    <div class="box box-list">
      <div v-for="list in lista" :key="list._id" class="person">
        <p>nome: {{ list.name }}</p>
        <p>idade: {{ list.age }}</p>
        <p>gênero: {{ list.gender }}</p>
        <div class="btns">
          <button class="edit btn" @click="editPerson(list._id)">Editar</button>
          <button class="delete btn" @click="deletePerson(list._id)">
            Excluir
          </button>
        </div>
      </div>
    </div>
    <div class="box">
      <div v-if="editingIndex !== -1">
        <form @submit.prevent="savePerson(editingIndex)" class="form-container">
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" v-model="editedPerson.name" required />
          </div>
          <div class="form-group">
            <label for="idade">Idade:</label>
            <input
              type="number"
              id="idade"
              v-model="editedPerson.age"
              required
            />
          </div>
          <div class="form-group">
            <label for="genero">Gênero:</label>
            <select id="genero" v-model="editedPerson.gender" required>
              <option value="" disabled>Selecione</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
            </select>
          </div>
          <div class="form-group">
            <button type="submit" class="btn-submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lista: [],
      editingIndex: -1,
      editedPerson: {
        name: "",
        age: null,
        gender: null,
      },
    };
  },
  methods: {
    editPerson(id) {
      this.editingIndex = this.lista.findIndex((item) => item._id === id);
      this.editedPerson = { ...this.lista[this.editingIndex] };
      this.show = true;
    },
    async savePerson(index) {
      await axios
        .patch(
          `http://localhost:3000/person/${this.lista[index]._id}`,
          this.editedPerson
        )
        .then((response) => {
          console.log(response.data);
          // Atualiza a lista com os dados atualizados
          this.lista[index] = response.data;
          // Limpa os campos de edição e o índice de edição
          this.editedPerson = { name: "", age: null, gender: "" };
          this.editingIndex = -1;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async deletePerson(id){
        if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
            await axios.delete(`http://localhost:3000/person/${id}`)
                    .then(response => {
                        console.log(response.data);
                        this.lista = this.lista.filter(item => item._id !== id);
                    })
                    .catch(error => {
                        console.error(error);
                    });
        }
    }
  },
  async mounted() {
    await axios.get("http://localhost:3000/person").then((response) => {
      this.lista = response.data;
    });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  width: 100vw;
}
.box-list{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.person {
  margin: 8px;
  padding:20px;
  background-color: rgba(246, 211, 194, 0.741);
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.btns {
  margin: 8px;
  display: flex;
  justify-content: space-between;
}
.edit {
  margin-right: 8px;
  background: rgb(75, 139, 235);
  cursor: pointer;
}
.edit:hover {
  background: rgb(56, 113, 200);
}
.delete {
  background: rgb(235, 75, 75);
  cursor: pointer;
}
.delete:hover {
  background: rgb(188, 55, 55);
}
.btn {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  text-align: center;
}

.form {
  width: 100vh;
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
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
}
</style>