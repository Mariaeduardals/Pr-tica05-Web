import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AtualizarRegistro from "../components/AtualizarRegistro.vue";
import BuscarRegistro from "../components/BuscarRegistro.vue";
import CadastrarRegistro from "../components/CadastrarRegistro.vue";
import ListarRegistro from "../components/ListarRegistro.vue";
import DeletarRegistro from "../components/DeletarRegistro.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastrar",
    name: "CadastrarRegistro",
    component: CadastrarRegistro,
  },
  {
    path: "/buscar",
    name: "BuscarRegistro",
    component: BuscarRegistro,
  },
  {
    path: "/atualizar",
    name: "AtualizarRegistro",
    component: AtualizarRegistro,
  },
  {
    path: "/listar",
    name: "ListarRegistro",
    component: ListarRegistro,
  },
  {
    path: "/deletar",
    name: "DeletarRegistro",
    component: DeletarRegistro,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
