//Controlador para Manejar Solicitudes

// Importamos las interfaces Request y Response de express para tipar los parámetros de las funciones
import { Request, Response } from "express";
// Importamos la función processQuestion desde el servicio llmService
import { processQuestion } from "../services/llmService";

// Definimos y exportamos la función askLLM que maneja las solicitudes POST al endpoint /ask
export const askLLM = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extraemos la pregunta del cuerpo de la solicitud
    const { question } = req.body;

    // Si no se proporciona una pregunta, respondemos con un error 400
    if (!question) {
      res.status(400).json({ error: "La pregunta es requerida." });
      return;
    }

    // Llamamos a la función processQuestion para obtener la respuesta a la pregunta
    const answer = await processQuestion(question);
    // Respondemos con la pregunta y la respuesta en formato JSON
    res.json({ question, answer });
  } catch (error) {
    // Si ocurre un error, respondemos con un error 500 y mostramos el error en la consola
    res.status(500).json({ error: "Error al procesar la solicitud." });
    console.error(error);
  }
};