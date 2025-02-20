import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  ollamaApiUrl: process.env.OLLAMA_API_URL || "http://localhost:11434/api/generate",
  ollamaModel: process.env.OLLAMA_MODEL || "deepseek-r1:r8",
};