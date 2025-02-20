// Importamos la aplicación express desde app.ts
import app from "./app";

// Definimos el puerto en el que la aplicación escuchará (puede ser definido en el archivo .env)
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor y hacemos que escuche en el puerto definido
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});