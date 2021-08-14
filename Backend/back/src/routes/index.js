const express = require("express");
const router = express.Router();
const registro = require('./registro-route');

router.get("/", function(req,res){
    console.log("!");
});

router.use('/registros', registro);
module.exports = router;