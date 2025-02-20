// Importamos axios para realizar solicitudes HTTP
import axios from "axios";
// Importamos la configuración desde el archivo env.ts
import { config } from "../config/env";

// Definimos y exportamos la función processQuestion que toma una pregunta y devuelve una respuesta
export const processQuestion = async (question: string): Promise<string> => {
  try {
    // Realizamos una solicitud POST a la API de Ollama con la pregunta y el modelo configurado
    const response = await axios.post(config.ollamaApiUrl, {
      model: config.ollamaModel,
      prompt: question,
      stream: false,
    });

    // Devolvemos la respuesta obtenida del modelo o un mensaje de error si no se obtuvo respuesta
    return response.data.response || "No se obtuvo respuesta del modelo.";
  } catch (error) {
    // Si ocurre un error, lo registramos en la consola y lanzamos un error
    console.error("Error al comunicarse con Ollama:", error);
    throw new Error("Error al comunicarse con el servidor LLM.");
  }
};