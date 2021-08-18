<template>
  <div class="deletar">
    <h1>Deletar Registro</h1>
    <div class="centralizar">
      <form style="width: 100%">
        <div class="form-group">
          <label for="idRegistro">ID do Registro: </label>
          <input
            v-model="idRegistro"
            type="text"
            class="form-control"
            id="idRegistro"
            placeholder="Id do Registro"
          />
        </div>
        <br>
        <button type="button" @click="deleteRegistro()" class="btn btn-danger">
          Deletar Registro
        </button>
        <div v-if="deletado && idRegistro !== ''" style="width: 100%">
          <div
            style="
              margin-top: 20px;
              border: solid 1px;
              border-color: #111;
              padding-top: 13px;
            "
          >
            <p>
              <strong>Registro deletado</strong>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"
export default {
  name: "DeletarRegistro",
  data() {
    return {
      idRegistro: "",
      deletado: false,
      baseURI: "http://localhost:8081/PR-TICA05-WEB-Backend/api/registros",
    };
  },
  methods: {
    async deleteRegistro() {
      const response = await api.delete(`/${this.idRegistro}`);
      console.log(response.data)
    },
  },
};
</script>

<style scoped>
.deletar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.centralizar {
  width: 50%;
}
</style>