import express from "express";
import { eventRouter } from "./src/routes/event.routes.js"; 
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors())

app.use(eventRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
