<template>
  <div class="listagem">
    <h1>Listar Registro</h1>
    <div style="width: 25%; display: flex; justify-content: space-between">
      <label>Listar todos</label>
      <button type="button" @click="getRegistros()" class="btn btn-primary">
        Listar
      </button>
    </div>
    <br>
    <div style="width: 90%">
      <div
        style="
          margin-top: 20px;
          border: solid 1px;
          border-color: #111;
          padding-top: 13px;
        "
        v-for="registro in registros"
        :key="registro.idRegistro"
      >
        <p>
          <strong>ID: </strong> {{ registro.idRegistro }}
           <strong>Nome: </strong> {{ registro.nomeF }} 
           <strong>Cargo: </strong> {{ registro.cargo }}
          <strong>Data de nascimento: </strong> {{ registro.dataN }}
          <strong>Data entrada: </strong> {{ registro.dataEntrada }}
        </p>
      </div>
    </div>
    <div class="filtrar">
      <div class="centralizar">
        <form style="width: 100%">
          <div class="form-group">
            <label for="marca">Filtrar por Cargo: </label>
            <input
              v-model="cargo"
              type="text"
              class="form-control"
              id="cargo"
              placeholder="Informe um cargo"
            />
            <button
              type="button"
              @click="filterRegistro()"
              class="btn btn-primary"
            >
              Filtrar
            </button>
          </div>
          <br>
          <div v-if="registros !== null" style="width: 100%">
            <div
              style="
                margin-top: 20px;
                border: solid 1px;
                border-color: #111;
                padding-top: 13px;
              "
              v-for="registro in registros"
              :key="registro.idRegistro"
            >
              <p>
                <strong>ID: </strong> {{ registro.idRegistro }} 
                <strong>Nome: </strong>{{ registro.nomeF }}
                 <strong>Cargo: </strong> {{ registro.cargo }}
                <strong>Data de nascimento: </strong> {{ registro.dataN }}
                <strong>Data de entrada na empresa: </strong> {{ registro.dataEntrada }}
               
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="filtrar">
      <div class="centralizar">
        <form style="width: 100%">
          <div class="form-group">
            <div style="margin-left=100px">
              <label for="quant">Filtrar por Quantidade</label>
              <input
                v-model="quantidade"
                type="text"
                class="form-control"
                id="quant"
                placeholder="Informe uma quantidade"
              />
              <button
                type="button"
                @click="filterRegistroByQuantity()"
                class="btn btn-primary"
              >
                Filtrar
              </button>
            </div>
          </div>
          <div v-if="registros !== null" style="width: 100%">
            <div
              style="
                margin-top: 20px;
                border: solid 1px;
                border-color: #111;
                padding-top: 13px;
              "
              v-for="registro in registros"
              :key="registro.idRegistro"
            >
              <p>
                <strong>ID: </strong> {{ registro.idRegistro }}
                 <strong>Nome: </strong> {{ registro.nomeF }} 
                 <strong>Cargo: </strong> {{ registro.cargo }}
                <strong>Data de nascimento: </strong> {{ registro.dataN }}
                <strong>Data da entrada na empresa: </strong> {{ registro.dataEntrada }}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastrarRegistro",
  data() {
    return {
      registros: {},
      baseURI: "http://localhost:8081/PR-TICA05-WEB-Backend/api/registros",
    };
  },
  methods: {
    getRegistros() {
      this.$http.get(this.baseURI).then((result) => {
        this.registros = result.data;
      });
    },
    filterRegistro() {
      this.$http.get(this.baseURI + "/?cargo=" + this.cargo).then((result) => {
        this.registros = result.data;
        console.log(this.registros);
      });
    },
    filterRegistroByQuantity() {
      this.$http
        .get(this.baseURI + "/?quantidade=" + this.quantidade)
        .then((result) => {
          this.registros = result.data;
          console.log(this.registros);
        });
    },
  },
};
</script>

<style>
.listagem {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.filtrar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>


