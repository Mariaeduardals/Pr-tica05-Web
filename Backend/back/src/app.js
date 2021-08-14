const express = require("express");
const cors = require('cors');
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require("./routes/index.js");
//const registro = require("./routes/registro-route.js");
//const router = require("./routes/registro-route.js");

app.use("/api",routes);

app.listen(port, () => {
    console.log(`example app listening  at http://localhost:${port}`)
});