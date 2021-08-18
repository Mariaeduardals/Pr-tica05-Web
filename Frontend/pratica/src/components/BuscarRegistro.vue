<template>
  <div class="buscar">
    <h1>Buscar po ID</h1>
     <div class="centralizar">
    <form style="width: 100%">
      <div class="form-group">
        <label for="idRegistro">ID do Registro: </label>
        <input
          v-model="idRegistro"
          type="text"
          class="form-control"
          id="idRegistro"
          placeholder="Id do registro"
        />
      </div>
      <br>
      <button type="button" @click="getRegistro()" class="btn btn-primary">
        Buscar Registro
      </button>
      <div v-if="registro != null" style="width: 100%">
        <div
          style="
            margin-top: 20px;
            border: solid 1px;
            border-color: #111;
            padding-top: 13px;
          "
        >
          <p>
            <strong>ID: </strong> {{ registro.id }} 
            <strong>Nome: </strong> {{ registro.nomeF }} 
            <strong>Cargo: </strong> {{ registro.cargo }}
            <strong>Data de nascimento: </strong> {{ registro.dataN }}
            <strong>Data de entrada na empresa: </strong> {{ registro.dataEntrada }}
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
  name: "BuscarRegistro",
  data() {
    return {
      registro: null,
      idRegistro: "",
    };
  },
  methods: {
    async getRegistro() {
      const response = await api.get(`/${this.idRegistro}`);
      console.log(response.data);
      this.registros = response.data;
    },
  },
};
</script>

<style scoped>
.buscar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.centralizar {
   width: 50%;
}
</style>
