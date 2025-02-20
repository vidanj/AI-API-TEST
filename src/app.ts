import express from "express"; 
import cors from 'cors';
import llmRoutes from "./routes/llmRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/llm", llmRoutes);

export default app;