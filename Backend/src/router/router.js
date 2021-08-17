import { Router } from 'express';
import {Post, GetAll, GetById, GetByoffice, GetByQtd, Update, Delete} from '../controllers/employee_controller.js';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.get("/cargo/:cargo", GetByoffice);
routes.get("/quantidade/:qtd", GetByQtd);
routes.put("/:id", Update);
routes.delete("/:id", Delete)

export default routes;