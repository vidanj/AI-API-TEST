//Ruta de los promts
// Importamos Router de express para definir rutas
import { Router } from "express";
// Importamos la función askLLM desde el controlador llmController
import { askLLM } from "../controllers/llmController";

// Creamos una nueva instancia de Router
const router = Router();

// Definimos una ruta POST en /ask que utiliza la función askLLM como controlador
router.post("/ask", askLLM);

// Exportamos el router para que pueda ser utilizado en otros archivos
export default router;