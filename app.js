import express from "express";
import { eventRouter } from "./src/routes/event.routes.js"; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(eventRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
