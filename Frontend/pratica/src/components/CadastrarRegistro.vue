<template>
  <div class="cadastrar">
    <h1>Cadastrar Registro</h1>
    <form style="width: 50%">
      <div class="form-group">
        <label for="nomeF">Nome do funcionário: </label>
        <input
          v-model="nomeF"
          type="text"
          class="form-control"
          id="nomeF"
          placeholder="Informe seu nome"
        />
      </div>
      <br>
      <div class="form-group">
        <label for="cargo">Cargo: </label>
        <input
          v-model="cargo"
          type="text"
          class="form-control"
          id="cargo"
          placeholder="Informe seu cargo"
        />
      </div>
      <br>
      <div class="form-group">
        <label for="dataN">Data de nascimento: </label>
        <input
          v-model="dataN"
          type="text"
          class="form-control"
          id="dataN"
          placeholder="Informe a data: dd/mm/aa"
        />
      </div>
      <br>
      <div class="form-group">
        <label for="dataEntrada">Data entrada na empresa: </label>
        <input
          v-model="dataEntrada"
          type="text"
          class="form-control"
          id="dataEntrada"
          placeholder="Informe a data: dd/mm/aa"
        />
      </div>
      <br>
      <button type="button" @click="postRegistro()" class="btn btn-primary">
        Cadastrar Registro
      </button>

      <div v-if="newRegistro != null" style="width: 100%">
          <div
            style="
              margin-top: 20px;
              border: solid 1px;
              border-color: #111;
              padding-top: 13px;
            "
          >
            <strong>Cadastrado</strong>
            <p>
              <strong>ID: </strong> {{ newRegistro.idRegistro }}
              <strong>Nome: </strong> {{ newRegistro.nomeF }}
              <strong>Cargo: </strong> {{ newRegistro.cargo }}
              <strong>Data de nascimento: </strong>
              {{ newRegistro.dataN }}
               <strong>Data da entrada na empresa: </strong>
              {{ newRegistro.dataEntrada }} 
            </p>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
import api from "@/services/api.js"
export default {
  name: "CadastrarRegistro",
  data() {
    return {
      nome: "",
      cargo: "",
      dataN: "",
      dataEntrada: "",
      registro: {},
      newRegistro: null,
      // baseURI: "http://localhost:8081/PR-TICA05-WEB-Backend/api/registros",
    };
  },
  methods: {
    async postRegistro() {
      this.registro.nomeF = this.nomeF;
      this.registro.cargo = this.cargo;
      this.registro.dataN = this.dataN;
      this.registro.dataEntrada = this.dataEntrada;
     
     const response = await api.post('/', this.registro);
     console.log(response.data)

      // this.$http.post(this.baseURI, this.registro).then((result) => {
      //   this.newRegistro = result.data;
      //   console.log(result.data);
      // });
    },
  },
};
</script>

<style>
.cadastrar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>