import express from "express";
import cors from "cors";

const app = express();
const PORT = 3333;
const HOST = '0.0.0.0';
app.use(cors());

app.get("/users", (request, response) => {
  response.json({
    message: "Docker-compose, observando a porta 3333 iae, funcionando!",
  });
});

app.listen(PORT, HOST);
