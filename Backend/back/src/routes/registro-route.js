const {Router} = require("express");
const router = Router();
const registroController = require("../controllers/registro-controller");

router.get("/",registroController.getAll);
router.get("/:idRegistro",registroController.getById);
router.get("/brand/:brand",registroController.getByBrand);
router.get("/quantity/:quantity",registroController.getByQuantity);
router.post("/",registroController.post);
router.put("/:idRegistro",registroController.put);
router.delete("/:idRegistro",registroController.delete);

module.exports = router;