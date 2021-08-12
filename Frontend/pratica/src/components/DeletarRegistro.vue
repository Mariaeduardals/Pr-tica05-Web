<template>
  <div class="deletar">
    <h1>Deletar Registro</h1>
    <div class="centralizar">
      <form style="width: 100%">
        <div class="form-group">
          <label for="idRegistro">ID do Registro</label>
          <input
            v-model="idRegistro"
            type="text"
            class="form-control"
            id="idRegistro"
            placeholder="Id do Registro"
          />
        </div>
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
export default {
  name: "DeletarRegistro",
  data() {
    return {
      idRegistro: "",
      deletado: false,
      baseURI: "http://localhost:8081/pratica4-backend/api/carros",
    };
  },
  methods: {
    deleteRegistro() {
      this.$http.delete(this.baseURI + "/" + this.idRegistro).then((result) => {});
      this.deletado = true;
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