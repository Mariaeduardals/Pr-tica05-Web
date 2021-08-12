<template>
  <div class="atualizar">
    <h1>Atualizar Registro</h1>
    <div class="centralizar">
      <form style="width: 100%">
           <div class="form-group">
          <label for="idRegistro">ID do Registro</label>
          <input
            v-model="idRegistro"
            type="text"
            class="form-control"
            id="idRegistro"
            placeholder="Informe o id"
          />
        </div>
        <div class="form-group">
          <label for="nomeF">Nome do funcionário:</label>
          <input
            v-model="nomeF"
            type="text"
            class="form-control"
            id="nomeF"
            placeholder="Informe seu nome"
          />
        </div>
        <div class="form-group">
          <label for="cargo">Cargo</label>
          <input
            v-model="cargo"
            type="text"
            class="form-control"
            id="cargo"
            placeholder="Informe seu cargo"
          />
        </div>
        <div class="form-group">
          <label for="dataN">Data de nascimento:</label>
          <input
            v-model="dataN"
            type="text"
            class="form-control"
            id="dataN"
            placeholder="Informe a data: dd/mm/aa"
          />
        </div>
        <div class="form-group">
          <label for="dataEntrada">Data de entrada na empresa:</label>
          <input
            v-model="dataEntrada"
            type="text"
            class="form-control"
            id="dataEntrada"
            placeholder="Informe a data: dd/mm/aa"
          />
        </div>
        <button type="button" @click="putRegistro()" class="btn btn-primary">
          Atualizar Registro
        </button>
        <div v-if="registroAnterior != null" style="width: 100%">
          <div
            style="
              margin-top: 20px;
              border: solid 1px;
              border-color: #111;
              padding-top: 13px;
            "
          >
            <strong>Anterior</strong>
            <p>
              <strong>ID: </strong> {{ registroAnterior.idRegistro }}
              <strong>Nome: </strong> {{ registroAnterior.nomeF }}
              <strong>Cargo: </strong> {{ registroAnterior.cargo }}
              <strong>Data de nascimento: </strong>
              {{ registroAnterior.dataN }}
              <strong>Data entrada na empresa: </strong> {{ registroAnterior.dataEntrada }}
            </p>
          </div>
        </div>
        <div v-if="registroUpdate != null" style="width: 100%">
          <div
            style="
              margin-top: 20px;
              border: solid 1px;
              border-color: #111;
              padding-top: 13px;
            "
          >
            <strong>Atualizado</strong>
            <p>
              <strong>ID: </strong> {{ registroAnterior.idRegistro }}
              <strong>Nome: </strong> {{ registroAnterior.nomeF }}
              <strong>Cargo: </strong> {{ registroAnterior.cargo }}
              <strong>Data de nascimento: </strong>
              {{ registroAnterior.dataN }} 
              <strong>Data de entrada na empresa: </strong>
              {{ registroAnterior.dataEntrada }} 
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AtualizarRegistro",
  data() {
    return {
      idRegistro: "", 
      nomeF: "",
      cargo: "",
      dataN: "",
      dataEntrada: "",
      registro: {},
      registroUpdate: null,
      registroAnterior: null,
      baseURI: "http://localhost:8081/PR-TICA05-WEB-Backend/api/registros",
    };
  },
  methods: {
    putRegistro() {
      this.registro.idRegistro = this.idRegistro;
      this.registro.nomeF = this.nomeF;
      this.registro.cargo = this.cargo;
      this.registro.dataN = this.dataN;
      console.log(this.dataN);
      this.registro.dataEntrada = this.dataEntrada;
      console.log(this.dataN);

      this.$http.get(this.baseURI + "/" + this.idRegistro).then((result) => {
        this.registroAnterior = result.data;
      });

      this.$http
        .put(this.baseURI + "/" + this.idRegistro, this.registro)
        .then((result) => {
          this.registroUpdate = result.data;
          console.log(this.registroUpdate.dataN);
        });
    },
  },
};
</script>

<style scoped>
.atualizar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.centralizar {
  width: 50%;
}
</style>