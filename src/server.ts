import express from "express";
import cors from "cors";
import courseRouter from "./routes/course.route";

const app = express();
app.use(express.json());
app.use(cors());

// Registra suas rotas
app.use("/courses", courseRouter);

// Roda o backend separado na porta 4000
app.listen(4000, () => {
  console.log("✅ Servidor Express rodando em http://localhost:4000");
});
