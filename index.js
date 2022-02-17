const express = require("express");

const PORT = 3000;

const HOST = "0.0.0.0";
/* definir esse host indica ao docker que só deve repassar a porta 3000 para a máquina 
e não rodar o servidor apenas para acesso interno */

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
